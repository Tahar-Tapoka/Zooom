import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuButton from "./MenuButton";

const MenuButtons = () => {
  return (
    <View style={styles.container}>
      <MenuButton
        title="New meeting"
        color="orange"
        icon="video-camera"
        onPress={() => console.log("New meeting")}
      />
      <MenuButton
        title="Join"
        icon="plus-square"
        onPress={() => console.log("Join")}
      />
      <MenuButton
        title="Schedule"
        icon="calendar"
        onPress={() => console.log("Schedule")}
      />
      <MenuButton
        title="Share Screen"
        icon="upload"
        onPress={() => console.log("Share Screen")}
      />
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
