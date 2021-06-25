import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import ExploreMapScreen from "../ExploreMap/index.js";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../../../assets/images/homeImage.jpg")}
        style={styles.image}
      >
        {/*Title*/}
        <Text style={styles.title}>Go Near</Text>

        {/*Button*/}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ExploreMapScreen")}
        >
          <Text style={styles.buttonText}>Explore Nearby</Text>
        </Pressable>
      </ImageBackground>

      {/* Search Bar */}
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("LocationSearch")}
      >
        <Fontisto name="search" size={25} color={"#108070"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
