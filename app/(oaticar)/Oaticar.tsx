import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function OaticarTitleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Oaticar</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    padding: 50,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
