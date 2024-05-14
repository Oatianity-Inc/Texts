import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer>
      <Drawer.Screen
        name="/main" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "The Oaticar",
          title: "The Oaticar",
        }}
      />
      <Drawer.Screen
        name="/OaticarChapter1" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Chapter1",
          title: "Chapter1",
        }}
      />
      \
      <Drawer.Screen
        name="/OaticarChapter2" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Chapter2",
          title: "Chapter2",
        }}
      />
      <Drawer.Screen
        name="/OaticarChapter3" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Chapter3",
          title: "Chapter3",
        }}
      />
    </Drawer>
  );
}
