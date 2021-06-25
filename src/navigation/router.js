import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LocationSearchScreen from "../screens/LocationSearch";
import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import ExploreMapScreen from "../screens/ExploreMap";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"LocationSearch"}
          component={LocationSearchScreen}
          options={{
            title: "Search a Location:",
          }}
        />
        <Stack.Screen
          name={"PostPage"}
          component={PostScreen}
          options={{
            title: "Post",
          }}
        />
        <Stack.Screen
          name={"ExploreMapScreen"}
          component={ExploreMapScreen}
          options={{
            title: "Nearby Posts",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
