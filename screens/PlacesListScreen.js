import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import PlaceItem from "../components/PlaceItem";

const mapStateToProps = (state) => ({
  places: state.places.places,
});

const PlacesListScreen = ({ places, navigation }) => {
  return (
    <FlatList
      data={places}
      renderItem={(itemData) => {
        return (
          <PlaceItem
            image={null}
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

export default connect(mapStateToProps)(PlacesListScreen);
