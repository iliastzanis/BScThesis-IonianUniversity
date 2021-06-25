import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  location: {
    marginVertical: 10,
    fontSize: 15,
    color: "#5b5b5b",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
