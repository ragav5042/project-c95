import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from "./navigation/drawerNavigator"
export default function App() {
  return (
  <NavigationContainer>
  <DrawerNavigator/>
  </NavigationContainer>
  );
}

