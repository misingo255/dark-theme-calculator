import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDouble: {
    width: "45%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // flex: 0,
    // alignItems: "flex-start",
    // paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#ffffff"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
