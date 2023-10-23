import { StyleSheet, Text, View } from 'react-native';
import Screens from './Views/Screens';
import Screen2 from './Views/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
