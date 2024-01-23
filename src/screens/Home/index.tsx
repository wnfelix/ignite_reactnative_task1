import {
	Button,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./styles";
import Header from "./components/Header";
import { useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react-native";
import GenerateUUID from "react-native-uuid";
import Task from "./components/Task";

interface ITask {
	id: string;
	name: string;
	done: boolean;
}

export default function Home() {
	const { v4: uuid } = GenerateUUID;
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [taskName, setTaskName] = useState("");

	function handlerAddTask() {
		setTasks(prevState => [
			...prevState,
			{
				id: uuid().toString(),
				name: taskName,
				done: false,
			},
		]);
		setTaskName("");
	}

	function handlerOnCheckTask(id: string, value: boolean) {
		setTasks(prevState => {
			const item = prevState[prevState.findIndex(i => i.id === id)];
			item.done = value;
			return [...prevState];
		});
	}

	function handlerOnDeleteTask(id: string) {
		setTasks(tasks.filter(t => t.id !== id));
	}

	return (
		<View style={styles.main}>
			<Header />
			<View style={styles.container}>
				<View style={styles.taskAdd}>
					<TextInput
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor="gray"
						style={styles.taskAddInput}
						onChangeText={setTaskName}
						value={taskName}
					/>
					<TouchableOpacity
						style={styles.taskAddButton}
						onPress={handlerAddTask}
					>
						<PlusCircle size={20} color="#fcfcfc" weight="thin" />
					</TouchableOpacity>
				</View>
				<View style={styles.taskCount}>
					<View style={styles.taskCountContainer}>
						<Text style={styles.taskCountAdd}>Criadas</Text>
						<Text style={styles.counter}>{tasks.length}</Text>
					</View>
					<View style={styles.taskCountContainer}>
						<Text style={styles.taskCountConclude}>Concluídas</Text>
						<Text style={styles.counter}>
							{tasks.filter(item => item.done).length}
						</Text>
					</View>
				</View>
				<View style={styles.tasks}>
					<FlatList
						data={tasks}
						keyExtractor={item => item.id}
						renderItem={({ item }) => (
							<Task
								key={item.id}
								id={item.id}
								label={item.name}
								value={item.done}
								onCheck={e => handlerOnCheckTask(item.id, e)}
								onDelete={handlerOnDeleteTask}
							/>
						)}
						ListEmptyComponent={
							<View style={styles.noTasks}>
								<ClipboardText size={45} weight="thin" color="gray" />
								<Text style={styles.taskEmpty1}>
									Você ainda não tem tarefas cadastradas
								</Text>
								<Text style={styles.taskEmpty2}>
									Crie Tarefas e organize seus itens a fazer
								</Text>
							</View>
						}
					/>
				</View>
			</View>
		</View>
	);
}
