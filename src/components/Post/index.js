import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const post = props.post;

  // const navigation = useNavigation();

  // const goToPostPage = () => {
  //   navigation.navigate("PostPage", { postId: post.id });
  // };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: post.image }} />
      {/* Location */}
      <Text style={styles.location}>Location: {post.location}</Text>
      {/* Post title*/}
      <Text style={styles.title}> {post.title} </Text>
      {/* Description */}
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};

export default Post;
