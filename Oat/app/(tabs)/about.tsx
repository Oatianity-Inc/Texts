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
      <Text style={styles.title}>About Oatianity</Text>
      <View style={styles.separator} />

      <Text style={styles.title1}>
        The Oatobiotics, Doctrine and Preeching Speeches.
      </Text>
      <Link href="/OaticarChapter1">
        <Text style={styles.minititle}>The Oatobiotics </Text>
      </Link>

      <Link href="/OaticarChapter1">
        <Text style={styles.minititle}>Foctrine </Text>
      </Link>
      <Link href="/OaticarChapter1">
        <Text style={styles.minititle}>Preaching Speeches </Text>
      </Link>
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
    fontSize: 35,
    fontWeight: "bold",
  },
  title1: {
    fontSize: 25,
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
