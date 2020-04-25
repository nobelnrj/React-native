import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const createEmployee = ({ navigation, route }) => {
  const getData = (type) => {
    if (route.params) {
      switch (type) {
        case "name":
          return route.params.name;
        case "phone":
          return route.params.phone;
        case "email":
          return route.params.email;
        case "salary":
          return route.params.salary;
        case "photo":
          return route.params.photo;
        case "position":
          return route.params.position;
      }
    }
    return "";
  };

  const [name, setName] = useState(getData("name"));
  const [phone, setPhone] = useState(getData("phone"));
  const [email, setEmail] = useState(getData("email"));
  const [salary, setSalary] = useState(getData("salary"));
  const [photo, setPhoto] = useState(getData("photo"));
  const [position, setPosition] = useState(getData("position"));
  const [modal, setModel] = useState(false);

  const submitData = () => {
    fetch("http://e394830a.ngrok.io/send-data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        salary,
        photo,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    Alert.alert(`added successfully`);
    navigation.navigate("Home");
  };

  const updateData = () => {
    fetch("http://e394830a.ngrok.io/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: route.params._id,
        name,
        phone,
        email,
        salary,
        photo,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`updated successfully`);
        navigation.navigate("Home");
      });
  };

  useEffect(() => {
    getPermissionAsync = async () => {
      const { galleryStatus } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
    };
    getPermissionAsync();
  });

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        let newfile = {
          uri: result.uri,
          type: `test/${result.uri.split(".")[1]}`,
          name: `test.${result.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } catch (E) {
      console.log(E);
    }
  };

  makeImage = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        let newfile = {
          uri: result.uri,
          type: `test/${result.uri.split(".")[1]}`,
          name: `test.${result.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "employeeApp");
    data.append("cloud_name", "nobelnrj");

    fetch("https://api.cloudinary.com/v1_1/nobelnrj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.url);
        console.log(data);
        setModel("false");
      });
  };

  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        placeholder="Enter employee name...."
        mode="outlined"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        label="Position"
        value={position}
        placeholder="Enter employee position...."
        mode="outlined"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setPosition(text);
        }}
      />
      <TextInput
        label="Phone"
        value={phone}
        placeholder="Enter employee phone no...."
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
        placeholder="Enter employee mail id...."
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
        placeholder="Enter employee salary...."
        mode="outlined"
        keyboardType="numeric"
        theme={theme}
        style={styles.textInput}
        onChangeText={(text) => {
          setSalary(text);
        }}
      />
      <Button
        icon={photo == "" ? "upload" : "check"}
        theme={theme}
        dark={false}
        style={styles.buttonView}
        mode="contained"
        compact={true}
        onPress={() => setModel(true)}
      >
        {photo == "" ? "upload" : "uploaded"}
      </Button>
      {route.params ? (
        <Button
          icon="content-save"
          theme={theme}
          dark={false}
          style={styles.buttonView}
          mode="contained"
          onPress={() => updateData()}
        >
          UPDATE
        </Button>
      ) : (
        <Button
          icon="content-save"
          theme={theme}
          dark={false}
          style={styles.buttonView}
          mode="contained"
          onPress={() => submitData()}
        >
          SAVE
        </Button>
      )}

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
              onPress={() => makeImage()}
            >
              CAMERA
            </Button>
            <Button
              icon="image"
              theme={theme}
              dark={false}
              mode="contained"
              onPress={() => pickImage()}
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
