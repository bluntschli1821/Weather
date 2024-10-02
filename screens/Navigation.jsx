import React from "react";
import Chat from "./Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";

const Stack = createNativeStackNavigator();

ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ChatStack" component={ChatStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Navigation() {
  return <RootNavigator />;
}
