import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card, FAB } from "react-native-paper";

const home = ({ navigation }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("http://e394830a.ngrok.io/")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderDetails = (item) => {
    return (
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("Profile", { item })}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.img}
            source={{
              uri: item.photo,
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return renderDetails(item);
          }}
          keyExtractor={(item) => `${item._id}`}
          refreshing={loading}
          onRefresh={() => fetchData()}
        />
      )}
      <FAB
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: "#f01b0c" } }}
        icon="plus"
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
    backgroundColor: "#07f7f7",
  },
  cardView: {
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
    marginBottom: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default home;
