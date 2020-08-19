import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import color from "../config/color";

function AppTextInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={color.white}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.orange,
    borderRadius: 25,
    flexDirection: "row",
    width: "85%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: color.white,
  },
});

export default AppTextInput;
