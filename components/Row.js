import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{ flexDirection: "row", width: "100%", height: "16%", }}>{children}</View>
);
