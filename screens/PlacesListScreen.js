import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";


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
      <Icon
        name="add-circle-outline"
        onPress={() => navigation.navigate("NewPlace")}
        size={30}
      />
    ),
  };
};

export default PlacesListScreen;
