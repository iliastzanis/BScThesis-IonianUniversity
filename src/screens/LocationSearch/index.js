import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import styles from "./styles.js";
import searchResults from "../../../assets/data/search.js";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow.js";

const LocationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Input Component */}

      <GooglePlacesAutocomplete
        placeholder="What are you exploring?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate("Home", {
            screen: "Explore",
            params: {
              screen: "SearchResults",
              params: { viewport: details.geometry.viewport },
            },
          });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: "Your Google places Api here",
          language: "en",
          //types: "(cities)",
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default LocationSearchScreen;
