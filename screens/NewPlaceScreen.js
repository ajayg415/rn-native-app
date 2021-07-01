import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../store/places-actions";
import ImgPicker from '../components/ImageSelector'

const mapDispatchToProps = {
  addPlace,
};

const NewPlaceScreen = ({ addPlace, navigation }) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState()

  const handleTitleChange = (title) => {
    setTitleValue(title);
  };

  const titleSaveHandler = () => {
    addPlace(titleValue, selectedImage);
    navigation.goBack();
  };

  const imageTakenHandler = imgUri => {
    setSelectedImage(imgUri)
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={titleValue}
          onChangeText={handleTitleChange}
        />
        <ImgPicker onImageTaken={imageTakenHandler}/>
        <Button title="Save Place" onPress={titleSaveHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

NewPlaceScreen.navigationOptions = () => {
  return {
    headerTitle: "All Places",
  };
};

export default connect(null, mapDispatchToProps)(NewPlaceScreen);
