import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Page12" component={Page12} />
     </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
function TabViewer({navigation}) {
  <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Books" component={Books} />
      </Tab.Navigator>

  </View>
}
function Home({navigation}) {
  <View style={styles.container}>
  <Text>Hello World</Text>
  </View>
}
function Books({navigation}) {
  <View style={styles.container}>
<Text>Hello World</Text>
  </View>
}
function Page12() {
  <View style={styles.container}>
      <Text>Hello World</Text>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  leftpage: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  rightpage: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  }
});
