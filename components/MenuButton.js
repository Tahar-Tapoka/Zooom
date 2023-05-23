import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const MenuButton = ({ title, icon, color = "blue", onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: color }}
        onPress={onPress}
      >
        <FontAwesome name={icon} size={24} color="#efefef" />
      </TouchableOpacity>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    paddingTop: 10,
    color: "#efefef",
  },
});
