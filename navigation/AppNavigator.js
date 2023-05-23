import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MeetingRoomScreen from "../screens/MeetingRoomScreen";

const HomeStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MeetingRoom"
          component={MeetingRoomScreen}
          options={{
            title: "Start a Meeting",
            headerStyle: { backgroundColor: "#1c1c1c" },
            headerTintColor: "white",
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
