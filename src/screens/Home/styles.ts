import { StyleSheet } from "react-native";

const purple = "rgb(130,132,250)";
const blue = "rgb(30,111,159)";
const darkGray = "rgb(47,47,47)";

export const styles = StyleSheet.create({
	main: {
		height: "100%",
	},
	container: {
		padding: 10,
		backgroundColor: "rgb(25,25,25)",
		flex: 1,
	},
	taskAdd: {
		flexDirection: "row",
		gap: 5,
		top: -40,
	},
	taskAddInput: {
		flex: 1,
		backgroundColor: "rgb(38,38,38)",
		borderRadius: 8,
		height: 50,
		padding: 10,
		fontSize: 18,
		color: "white",
		borderStyle: "solid",
		borderColor: purple,
		borderWidth: 1,
	},
	taskAddButton: {
		width: 50,
		backgroundColor: blue,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	taskCount: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: darkGray,
		paddingBottom: 15,
	},
	taskCountContainer: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
	},
	counter: {
		borderRadius: 8,
		color: "white",
		backgroundColor: darkGray,
		padding: 2,
		paddingLeft: 8,
		paddingRight: 8,
	},
	taskCountAdd: {
		color: blue,
		fontWeight: "bold",
	},
	taskCountConclude: {
		color: purple,
		fontWeight: "bold",
	},
	tasks: {
		flex: 1,
		paddingTop: 10,
	},
	noTasks: {
		paddingTop: 10,
		alignItems: "center",
	},
	taskEmpty1: {
		color: "gray",
		fontWeight: "bold",
	},
	taskEmpty2: {
		color: "gray",
	},
});
