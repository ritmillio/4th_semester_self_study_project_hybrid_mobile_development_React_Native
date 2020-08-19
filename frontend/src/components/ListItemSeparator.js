import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../config/color";

function ListItemSeparator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: color.light,
      }}
    ></View>
  );
}

export default ListItemSeparator;
