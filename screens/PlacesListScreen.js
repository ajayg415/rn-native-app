import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import PlaceItem from "../components/PlaceItem";
import { loadPlaces } from "../store/places-actions";

const mapStateToProps = (state) => ({
  places: state.places.places,
});

const mapDispatchToProps = {
  loadPlaces,
};

const PlacesListScreen = ({ places, navigation, loadPlaces }) => {
  useEffect(() => {
    loadPlaces()
  }, []);
  
  console.log('places :', places)

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => {
        return (
          <PlaceItem
            image={itemData.item.imageUri}
            title={itemData.item.title}
            address={null}
            onSelect={() => {
              navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        );
      }}
    />
  );
};

PlacesListScreen.navigationOptions = {
  headerTitle: "Add Places",
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <Text>Add Places</Text>,
    headerRight: () => (
      <Icon
        name="add-circle-outline"
        onPress={() => navigation.navigate("NewPlace")}
        size={30}
      />
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListScreen);
