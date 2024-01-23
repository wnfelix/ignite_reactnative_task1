import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main: {
		marginTop: 10,
		padding: 10,
		backgroundColor: "rgb(38,38,38)",
		borderRadius: 8,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#2b2b2b",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	delete: {
		justifyContent: "flex-end",
		flexDirection: "row",
		cursor: "pointer",
	},
});
