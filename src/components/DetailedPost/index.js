import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./styles.js";

const Post = (props) => {
  const post = props.post;
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default Post;
