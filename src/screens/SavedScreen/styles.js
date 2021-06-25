import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  saveBar: {
    height: 50,
    width: Dimensions.get("screen").width - 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    zIndex: 100,
  },
  text: {
    color: "black",
    fontSize: 25,
  },
});

export default styles;
