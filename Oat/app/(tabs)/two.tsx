import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <View style={styles.separator} />

      <Text style={styles.title}>The Oaticar</Text>
      <Link href="/OaticarChapter1">
              
              <Text style={styles.minititle}>Chapter 1</Text>
              </Link>
              <Link href="/OaticarChapter2">
              
              <Text style={styles.minititle}>Chapter 2</Text>
              </Link>
              <Link href="/OaticarChapter3">
              
              <Text style={styles.minititle}>Chapter 3</Text>
              </Link>
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
  minititle: {
    fontSize: 16,
   
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
