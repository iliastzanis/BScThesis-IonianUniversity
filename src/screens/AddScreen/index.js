import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Text,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import Entypo from "react-native-vector-icons/Entypo";

export default function index() {
  const [imageURI, setImageURI] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Entypo name={"images"} size={25} color={"#108070"} />
        <Text style={styles.title}> Add a new Post </Text>
        <Entypo name={"images"} size={25} color={"#108070"} />
      </View>
      <ScrollView>
        <View style={styles.imageView}>
          <Button
            color={"#108070"}
            title="Pick an image from camera roll"
            onPress={pickImage}
          />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.textOR}>OR</Text>
        </View>

        <TextInput
          value={imageURI}
          onChangeText={(text) => setImageURI(text)}
          placeholder="ADD IMAGE URI"
          placeholderTextColor="#108070"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          style={styles.textInputImage}
        />
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Image Title"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          value={location}
          onChangeText={(text) => setLocation(text)}
          placeholder="Location"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Description"
          placeholderTextColor="#aaaaaa"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          style={styles.textInputDescription}
        />
        <View style={styles.upload}>
          <Button
            color={"#108070"}
            title="Upload"
            onPress={() => console.log("you pressed")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
