import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = (props) => {
  const openPhone = () => {
    Platform.OS = "android"
      ? Linking.openURL("tel:7395858598")
      : Linking.openURL("telprompt:7395858598");
  };

  const {
    id,
    photo,
    name,
    position,
    phone,
    email,
    salary,
  } = props.route.params.item;

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
            uri: photo,
          }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 7, marginBottom: 10 }}>
        <Title>{name}</Title>
        <Text>{position}</Text>
      </View>
      <Card style={styles.myCard} theme={theme} onPress={() => openPhone()}>
        <View style={styles.cardContent}>
          <MaterialIcons name="call" size={32} color="#fff" />
          <Text style={{ fontSize: 20, marginLeft: 15, color: "#fff" }}>
            {phone}
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
            {email}
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard} theme={theme}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#fff" />
          <Text style={{ fontSize: 20, marginLeft: 15, color: "#fff" }}>
            {salary}
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
