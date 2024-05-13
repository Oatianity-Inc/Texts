import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/reanimated2/core";

export default function Page12Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter 1</Text>
      <View style={styles.leftpage}>

        </View>
        <View style={styles.rightpage}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftpage: {
    textAlign: "left",
  },
  rightpage: {
    
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
