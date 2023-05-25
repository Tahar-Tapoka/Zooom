import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const ChatScreen = ({ setModalVisible, modalVisible }) => {
  const [icon, setIcon] = useState(true);
  const [msg, setMsg] = useState();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <View style={styles.container}>
          {/* -------------------Header------------------ */}
          <View style={styles.header}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.btnTxt}>Close</Text>
            </Pressable>
            <Text style={styles.headerTxt}>Chat</Text>
            <FontAwesome
              name={icon ? "bell" : "bell-slash"}
              size={24}
              color="white"
              onPress={() => setIcon(!icon)}
            />
          </View>
          {/* -------------------Messages------------------ */}

          <View style={styles.chatMessages}></View>
          {/* -------------------Typing-------------------- */}
          <View style={styles.chatFormContainer}>
            <Text style={{ color: "white" }}>Send to: Everyone</Text>
            <View style={styles.chatForm}>
              <TextInput
                style={styles.input}
                value={msg}
                onChangeText={(msg) => setMsg(msg)}
                placeholder="Type your msg..."
                placeholderTextColor="#767476"
              />
              <View
                style={{
                  ...styles.icon,
                  backgroundColor: msg ? "#0B71EB" : "#373838",
                }}
              >
                <FontAwesome
                  name="send"
                  size={24}
                  color="white"
                  onPress={() => setMsg("")}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnTxt: {
    color: "white",
    fontSize: 20,
  },
  headerTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  chatFormContainer: {
    marginTop: "auto",
    marginBottom: 20,
    padding: 15,
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
  chatForm: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#1c1c1c",
    height: 50,
    width: "85%",
    color: "white",
    padding: 10,
    borderColor: "#333333",
    borderRadius: 10,
    borderWidth: 2,
  },
  icon: {
    height: 50,
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  chatMessages: { flex: 1, height: "100%" },
});
