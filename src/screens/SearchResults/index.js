import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, View } from "react-native";
import Post from "../../components/Post";

const SearchResultsScreen = (props) => {
  const { posts } = props;

  return (
    <View>
      <StatusBar style="dark" />
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
