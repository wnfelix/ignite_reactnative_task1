import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CheckCircle, Circle } from "phosphor-react-native";

export interface ICheckBoxProps {
	label: string;
	value: boolean;
	onCheck?: (value: boolean) => void;
}

export default function CheckBox(props: ICheckBoxProps) {
	const [done, setDone] = useState(props.value);

	function handlerOnCheck() {
		setDone(!done);
		props.onCheck?.(!done);
	}

	return (
		<View style={styles.main}>
			<TouchableOpacity onPress={handlerOnCheck} style={styles.content}>
				{done ? (
					<CheckCircle color="#8284fa" size={17} weight="fill" />
				) : (
					<Circle color="#4ea8de" size={17} weight="bold" />
				)}
				<Text style={done ? styles.taskDone : styles.taskUndone}>
					{props.label}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
