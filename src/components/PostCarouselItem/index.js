import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  return (
    <Pressable style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image style={styles.image} source={{ uri: post.image }} />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {/* Location */}
          <Text style={styles.location}>Location: {post.location}</Text>
          {/* Post title*/}
          <Text style={styles.title}> {post.title} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
