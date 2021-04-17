import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import {
    NavigationContainer,
  } from "@react-navigation/native";
const RootStack = () => {


    return (
<NavigationContainer>
<HomeScreen />
</NavigationContainer>

)

};

export default RootStack;