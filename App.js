import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import ContentDetail from "./screens/ContentDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          right: "5%",
          left: "5%",
          width: "90%",
          height: 80,
          borderRadius: 15,
          backgroundColor: "#7843E6",
          textAlignVertical: 'center',
          paddingBottom: 0
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 60, height: 60}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={"Profile"}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/profil.png")}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={ContentDetail}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/arama.png")}
              style={{ width: 60, height: 60 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        <Stack.Screen name="ContentDetail" component={ContentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}