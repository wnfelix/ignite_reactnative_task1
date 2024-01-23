import { Text, View } from "react-native";

import Logo from "../../../../assets/Logo.svg";
import { styles } from "./styles";

export default function Header() {
	return (
		<View style={styles.container}>
			<Logo />
		</View>
	);
}
