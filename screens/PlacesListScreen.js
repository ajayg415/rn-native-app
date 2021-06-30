import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PlacesListScreen = () => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = {
  headerTitle: "All Places",
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <Text>All Places</Text>,
    headerRight: () => (
      <Button onPress={() => navigation.navigate("NewPlace")} title="New" />
    ),
  };
};

export default PlacesListScreen;
