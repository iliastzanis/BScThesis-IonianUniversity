import React, { useEffect, useRef, useState } from "react";
import { View, Text, useWindowDimensions, FlatList } from "react-native";
import MapView from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

const SearchResultsMap = (props) => {
  const { posts } = props;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();

  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = posts.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{ width: "100%", height: " 100%" }}>
      <MapView
        ref={map}
        style={{ width: "100%", height: " 100%" }}
        initialRegion={{
          latitude: 39.6248,
          longitude: 19.9231,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        {posts.map((place) => (
          <CustomMarker
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            location={place.title}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            key={place.id}
          />
        ))}
      </MapView>

      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
