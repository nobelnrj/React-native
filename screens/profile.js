import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  const openPhone = () => {
    Platform.OS = "android"
      ? Linking.openURL("tel:7395858598")
      : Linking.openURL("telprompt:7395858598");
  };
  return (
    <View>
      <LinearGradient
        colors={["#07f7f7", "transparent"]}
        style={{
          height: 250,
        }}
      />
      <View style={{ alignItems: "center", marginTop: -100 }}>
        <Image
          style={{ width: 140, height: 140, borderRadius: 70 }}
          source={{
            uri:
              "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80",
          }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 7, marginBottom: 10 }}>
        <Title>Nobel Reo Jacob</Title>
        <Text>Web Developer</Text>
      </View>
      <Card style={styles.myCard} theme={theme} onPress={() => openPhone()}>
        <View style={styles.cardContent}>
          <MaterialIcons name="call" size={32} color="#fff" />
          <Text style={{ fontSize: 20, marginLeft: 15, color: "#fff" }}>
            7395858598
          </Text>
        </View>
      </Card>
      <Card
        style={styles.myCard}
        theme={theme}
        onPress={() => {
          Linking.openURL("mailto:nobelreojacob@gmail.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="mail" size={32} color="#fff" />
          <Text style={{ fontSize: 20, marginLeft: 15, color: "#fff" }}>
            nobelreojacob@gmail.com
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard} theme={theme}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#fff" />
          <Text style={{ fontSize: 20, marginLeft: 15, color: "#fff" }}>
            10 LPA
          </Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Button
          icon="account-edit"
          theme={theme}
          dark={false}
          mode="contained"
          onPress={() => console.log("pressed")}
        >
          EDIT
        </Button>
        <Button
          icon="delete"
          theme={theme}
          dark={false}
          mode="contained"
          onPress={() => console.log("pressed")}
        >
          DELETE
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#07f7f7",
  },
};

const styles = StyleSheet.create({
  myCard: {
    margin: 10,
    backgroundColor: "#5c706c",
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
  },
});

export default Profile;
