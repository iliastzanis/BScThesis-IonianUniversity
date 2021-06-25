import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SavedScreen() {
  return (
    <View style={styles.saveBar}>
      <StatusBar style="dark" />
      <FontAwesome name="heart-o" size={25} color={"#108070"} />
      <Text style={styles.text}> Saved Posts </Text>
      <FontAwesome name="heart-o" size={25} color={"#108070"} />
    </View>
  );
}
