import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Camera, CameraType } from "expo-camera";

const MeetingRoomScreen = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();
  const [startCam, setStartCam] = useState(false);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCam(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    startCamera();
    socket.emit("join-room", { roomId: roomId, user: name });
  };

  useEffect(() => {
    const API_URL = "http://192.168.47.203:3001/";
    socket = io(`${API_URL}`);
    console.log("hello");
    socket.on("connection", () => console.log("connected"));
    socket.on("room-users", (users) => {
      console.log("Active users", users);
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCam ? (
        <Camera style={{ flex: 1 }} type={CameraType.front} />
      ) : (
        <>
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
          <TouchableOpacity style={styles.button} onPress={() => joinRoom()}>
            <Text style={styles.buttonTxt}>Start Meeting</Text>
          </TouchableOpacity>
        </>
      )}
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
