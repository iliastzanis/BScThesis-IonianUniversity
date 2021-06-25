import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import ExploreNavigator from "./ExploreNavigator";
import ProfileScreen from "../screens/Profile";
import SavedScreen from "../screens/SavedScreen/index";
import AddScreen from "../screens/AddScreen/index";
import MessagesScreen from "../screens/MessagesScreen/index";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#108070",
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={"Explore"}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Saved"}
        component={SavedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Add"}
        component={AddScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={"images"} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
