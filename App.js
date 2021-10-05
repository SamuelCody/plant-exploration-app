import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import Home from "./screens/Home";
import Tabs from "./navigation/Tabs";
import PlantDetail from "./screens/PlantDetail";

const Stack = createStackNavigator();

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
    "roboto-black-italic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-bold-italic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-light-italic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-medium-italic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "roboto-thin-italic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
    "roboto-condensed-bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "roboto-condensed-bold-italic": require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    "roboto-condensed-light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "roboto-condensed-italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "roboto-condensed-light-italic": require("./assets/fonts/RobotoCondensed-LightItalic.ttf"),
    "roboto-condensed-regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* Screens */}
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
