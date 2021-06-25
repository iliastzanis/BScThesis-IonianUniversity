import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  text: {
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
  title: {
    fontSize: 25,
  },
  imageView: {
    borderRadius: 5,
    margin: 10,
    marginLeft: 60,
    marginRight: 60,
  },
  image: {
    width: 200,
    height: 200,
    padding: 20,
  },
  textInput: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  textOR: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#108070",
  },
  textInputImage: {
    height: 48,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
    marginRight: 60,
    paddingLeft: 16,
  },
  textInputDescription: {
    height: 200,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  upload: {
    margin: 10,
    marginLeft: 100,
    marginRight: 100,
  },
});

export default styles;
