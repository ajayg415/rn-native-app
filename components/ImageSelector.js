import React, { useState } from "react";
import { Alert, View, Button, Text, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

import Colors from "../constants/Colors";

const ImgPicker = ({onImageTaken}) => {
  const [pickedImg, setPickedImg] = useState();

  const verifyPermissions = async () => {
    const res = await Permission.askAsync(Permission.CAMERA);
    if (res.status !== "granted") {
      Alert.alert("Insufficient permissions", "You need to grant permissions", [
        { text: "okay" },
      ]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    if (await verifyPermissions()) {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      setPickedImg(image.uri);
      onImageTaken(image.uri)
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {pickedImg ? (
          <Image style={styles.image} source={{ uri: pickedImg }} />
        ) : (
          <Text>No image picked yet</Text>
        )}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
