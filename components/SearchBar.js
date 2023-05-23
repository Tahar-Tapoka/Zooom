import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={24} color="#858585" />
      <Text style={styles.txt}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  txt: {
    color: "#858585",
    fontSize: 24,
    paddingLeft: 10,
  },
});
