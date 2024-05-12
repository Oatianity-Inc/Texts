import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <View style={styles.separator} />

      <Text style={styles.title}>The Oaticar</Text>
      <Text style={styles.title}>The Books of the Groats</Text>
      <Text style={styles.title}>The Oatobiotics</Text>
      <Text style={styles.title}>Preaching Speaches</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
