import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{width: "100%", height: "20%",marginBottom: "1.15%",flexDirection: "row", justifyContent: "space-around",}}>{children}</View>
);
