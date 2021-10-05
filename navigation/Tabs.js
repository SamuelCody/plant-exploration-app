import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import appTheme from "../constants/theme";
import ICONS from "../constants/icons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const { COLORS } = appTheme;

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
      }}
    >
      <Image
        source={ICONS.camera}
        resizeMode="contain"
        style={{ width: 23, height: 23 }}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...{
          tabBarShowLabel: false,
          tabBarStyle: { height: "10%" },
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;

            switch (route.name) {
              case "Home":
                return (
                  <Image
                    source={ICONS.flash}
                    resizeMode="contain"
                    style={{ tintColor: tintColor, height: 25, width: 25 }}
                  />
                );
              case "Box":
                return (
                  <Image
                    source={ICONS.cube}
                    resizeMode="contain"
                    style={{ tintColor: tintColor, height: 25, width: 25 }}
                  />
                );
              case "Camera":
                return <CameraButton />;
              case "Search":
                return (
                  <Image
                    source={ICONS.search}
                    resizeMode="contain"
                    style={{ tintColor: tintColor, height: 25, width: 25 }}
                  />
                );
              case "Favourite":
                return (
                  <Image
                    source={ICONS.heart}
                    resizeMode="contain"
                    style={{ tintColor: tintColor, height: 25, width: 25 }}
                  />
                );
            }
          },
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
