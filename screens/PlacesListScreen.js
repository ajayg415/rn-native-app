import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});

PlacesListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Place"
          iconName="md-add"
          onPress={() => navigation.navigate("NewPlace")}
        />
      </HeaderButtons>
    ),
  };
};

export default PlacesListScreen;
