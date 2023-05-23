import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonItem from "./ButtonItem";

const MenuButtons = () => {
  return (
    <View style={styles.container}>
      <ButtonItem
        title="New meeting"
        color="#FF751F"
        icon="video-camera"
        onPress={() => console.log("New meeting")}
      />
      <ButtonItem
        title="Join"
        icon="plus-square"
        onPress={() => console.log("Join")}
      />
      <ButtonItem
        title="Schedule"
        icon="calendar"
        onPress={() => console.log("Schedule")}
      />
      <ButtonItem
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
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
  },
});
