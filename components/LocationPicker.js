import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import {
  LOCATION_BACKGROUND,
  LOCATION_FOREGROUND,
  askAsync,
  LOCATION,
} from "expo";

import Colors from "../constants/Colors";

const LocationPicker = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const getLocationHandler = async () => {
    if (await verifyPermissions()) {
      try {
        setIsFetching(true);
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
        console.log(location);
        setPickedLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } catch (err) {
        Alert.alert("Could not fetch location!", "Please try again later", [
          { text: "Okay" },
        ]);
      }
      setIsFetching(false);
    }
  };

  const verifyPermissions = async () => {
    const res = await askAsync(
      LOCATION_BACKGROUND,
      LOCATION_FOREGROUND,
      LOCATION
    );
    if (res.status !== "granted") {
      Alert.alert("Insufficient permissions", "You need to grant permissions", [
        { text: "okay" },
      ]);
      return false;
    }
    return true;
  };

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text>No Location Chosen yet</Text>
        )}
      </View>
      <Button
        title="get User Location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LocationPicker;
