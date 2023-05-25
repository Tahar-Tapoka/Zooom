import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonItem from "./ButtonItem";
import { useNavigation } from "@react-navigation/native";

const CameraMenuButtons = ({ chatButtonHandler }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ButtonItem
        title="Mute"
        color="#333333"
        icon="microphone"
        onPress={() => console.log("Mute")}
      />
      <ButtonItem
        title="Stop Video"
        color="#333333"
        icon="video-camera"
        onPress={() => console.log("Stop Video")}
      />
      <ButtonItem
        title="Share Content"
        color="#333333"
        icon="upload"
        onPress={() => console.log("Share Content")}
      />
      <ButtonItem
        title="Participants"
        color="#333333"
        icon="users"
        onPress={() => console.log("Participants")}
      />
      <ButtonItem
        title="Chat"
        color="#333333"
        icon="comment"
        onPress={() => chatButtonHandler(true)}
      />
    </View>
  );
};

export default CameraMenuButtons;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
