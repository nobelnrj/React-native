import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const home = () => {
  return (
    <Card style={styles.card}>
      <Text>This is from home screen</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 5,
    backgroundColor: "#6285ff",
    width: 200,
  },
});

export default home;
