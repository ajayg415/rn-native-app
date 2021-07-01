import * as FileSystem from "expo-file-system";

import { insertPlace } from "../helpers/db";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbRes = await insertPlace(title, image, "Dummy address", 15, 15);
      console.log(dbRes);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbRes.insertId,
          title,
          image: newPath,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
