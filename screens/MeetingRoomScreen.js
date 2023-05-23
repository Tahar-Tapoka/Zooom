import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const MeetingRoomScreen = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  useEffect(() => {
    const API_URL = "http://localhost:3001/";
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder="Enter your name"
        placeholderTextColor="#767476"
      />
      <TextInput
        style={styles.input}
        onChangeText={(id) => setRoomId(id)}
        value={roomId}
        placeholder="Enter Room Id"
        keyboardType="numeric"
        placeholderTextColor="#767476"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(name, "  ", roomId)}
      >
        <Text style={styles.buttonTxt}>Start Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MeetingRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b3a1c",
  },
  input: {
    backgroundColor: "#1c1c1c",
    height: 50,
    color: "white",
    padding: 10,
    fontSize: 18,
    marginBottom: 1,
  },
  button: {
    width: "70%",
    backgroundColor: "#0470DC",
    borderRadius: 15,
    alignSelf: "center",
    padding: 10,
    marginVertical: 15,
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
