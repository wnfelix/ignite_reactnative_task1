import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	content: {
		gap: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	checkDone: {
		color: "#8284fa",
	},
	checkToDo: {
		color: "#4ea8de",
	},
	taskDone: {
		textDecorationLine: "line-through",
		color: "gray",
		textAlign: "justify",
		flexWrap: "wrap",
		maxWidth: "90%",
	},
	taskUndone: {
		color: "white",
		textAlign: "justify",
		flexWrap: "wrap",
		maxWidth: "90%",
	},
});
