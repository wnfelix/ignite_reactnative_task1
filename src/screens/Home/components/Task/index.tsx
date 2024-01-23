import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CheckBox, { ICheckBoxProps } from "../CheckBox";
import { Trash } from "phosphor-react-native";

interface ITaskProps extends ICheckBoxProps {
	id: string;
	onDelete?: (id: string) => void;
}

export default function Task(props: ITaskProps) {
	return (
		<View style={styles.main}>
			<CheckBox {...props} />

			<View style={styles.delete}>
				<TouchableOpacity onPress={() => props.onDelete?.(props.id)}>
					<Trash size={16} color="gray" weight="thin" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
