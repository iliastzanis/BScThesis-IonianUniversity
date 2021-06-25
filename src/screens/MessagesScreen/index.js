import React from "react";
import { View, Text, Pressable } from "react-native";

export default function MessagesScreen() {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          width: "30%",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        New messages will be displayed here
      </Text>
    </View>
  );
}
