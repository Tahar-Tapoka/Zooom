import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <ContactsMenu />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 15,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#1c1c1c",
  },
});
