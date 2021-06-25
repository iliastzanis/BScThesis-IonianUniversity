import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    textShadowColor: "black",
    textShadowRadius: 90,
    marginLeft: 25,
  },
  button: {
    backgroundColor: "white",
    width: 150,
    height: 40,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "white",
    height: 50,
    width: Dimensions.get("screen").width - 20,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
