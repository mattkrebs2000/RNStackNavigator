import React, { useState, useEffect } from "react";
import { scale } from "react-native-size-matters";
import { Button, Text } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";
import Yellow from "./Yellow";
import Imagepage from "./ImageBackground";
import { Provider } from "react-native-paper";

// import Braingauge from "./Braingauge";
// import { DrawerContent } from "./components/DrawerContent";

const headerStyle = {
  backgroundColor: "black",

};

function Root() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Blue"
        component={Blue}
        options={{
          headerLeft: null,
          title: "Blue",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      <Stack.Screen
        name="Imagepage"
        component={Imagepage}
        options={{

          title: "Imagepage",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      <Stack.Screen
        name="Green"
        component={Green}
        options={{
          title: "Green",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      <Stack.Screen
        name="Yellow"
        component={Yellow}
        options={{
          title: "Yellow",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      <Stack.Screen
        name="Red"
        component={Red}
        options={{
          title: "Red",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
    </Stack.Navigator>
  );
}

export const Navigators = ({ navigation }) => {
  const MainStack = createStackNavigator();
  const MainStackScreen = () => (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Red"
        component={Red}
        IconBar
        options={{
          title: "Red",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
      <MainStack.Screen
        name="Blue"
        component={Blue}
        options={{
          title: "Blue",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />

      <MainStack.Screen
        name="Green"
        component={Green}
        options={{
          title: "Green",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
      <MainStack.Screen
        name="Yellow"
        component={Yellow}
        IconBar
        options={{
          headerShown: false,
          title: "Yellow",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />

      <MainStack.Screen
        name="Root"
        component={Root}
        IconBar
        options={{
          headerShown: false,
          title: "Root",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
    </MainStack.Navigator>
  );

  return (
    <Provider>
      <MainStackScreen />
    </Provider>
  );
};

export default Navigators;
