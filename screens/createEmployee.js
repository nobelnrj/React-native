import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";

const createEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModel] = useState(false);

  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        placeholder="Enter your name...."
        mode="outlined"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        label="Phone"
        value={phone}
        placeholder="Enter your phone no...."
        mode="outlined"
        keyboardType="number-pad"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setPhone(text);
        }}
      />
      <TextInput
        label="Email"
        value={email}
        placeholder="Enter your mail id...."
        mode="outlined"
        keyboardType="email-address"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        label="Salary"
        value={salary}
        placeholder="Enter your salary...."
        mode="outlined"
        keyboardType="numeric"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setSalary(text);
        }}
      />
      <Button
        icon="upload"
        theme={theme}
        dark={false}
        style={styles.buttonView}
        mode="contained"
        compact={true}
        onPress={() => setModel(true)}
      >
        UPLOAD
      </Button>
      <Button
        icon="content-save"
        theme={theme}
        dark={false}
        style={styles.buttonView}
        mode="contained"
        onPress={() => setModel(true)}
      >
        SAVE
      </Button>
      <Modal
        visible={modal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setModel(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              theme={theme}
              dark={false}
              mode="contained"
              onPress={() => console.log("pressed")}
            >
              CAMERA
            </Button>
            <Button
              icon="image"
              theme={theme}
              dark={false}
              mode="contained"
              onPress={() => console.log("pressed")}
            >
              GALLERY
            </Button>
          </View>
          <Button
            icon="close"
            theme={theme}
            dark={false}
            style={styles.buttonView}
            mode="contained"
            onPress={() => setModel(false)}
          >
            CLOSE
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#07f7f7",
  },
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
  },
  buttonView: {
    margin: 10,
    borderRadius: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#b8e6ff",
    padding: 20,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
});

export default createEmployee;
