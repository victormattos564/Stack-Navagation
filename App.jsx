import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Contact from './src/screens/Contact/index';
import Home from './src/screens/Home/index';
import Profile from './src/screens/Profile/index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer Style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
          options={{
            title: "Tela Inicial",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center"
          }} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Contact' component={Contact} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});