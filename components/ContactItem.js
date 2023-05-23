import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ContactItem = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.logoContainer}>
        {image ? (
          <Image style={styles.tinyLogo} source={{ uri: image }} />
        ) : (
          <FontAwesome name="star" size={26} color="#efefef" />
        )}
      </View>
      <Text style={styles.txt}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  tinyLogo: { width: 50, height: 50, borderRadius: 15 },
  txt: {
    fontSize: 20,
    color: "#efefef",
    marginLeft: 15,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
  },
});
