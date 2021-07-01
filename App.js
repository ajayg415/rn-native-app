import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/places-reducers";
import { init } from "./helpers/db";

const rootReducer = combineReducers({
  places: placesReducer,
});

init()
  .then(() => {
    console.log("db init success");
  })
  .catch(() => {
    console.log("db init failed");
  });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
