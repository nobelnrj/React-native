import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

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
    </View>
  );
};

const theme = {
  colors: {
    primary: "#f01b0c",
  },
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
  },
});

export default createEmployee;
