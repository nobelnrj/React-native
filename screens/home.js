import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const home = ({ navigation }) => {
  const data = [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      name: "Nobel",
      position: "Web developer",
      phone: 7395858598,
      email: "nobelreojacob@gmail.com",
      salary: "10 LPA",
    },
    {
      id: 2,
      photo:
        "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      name: "Shibu",
      position: "Senior Web developer",
      phone: 7395534541,
      email: "shibulijack@gmail.com",
      salary: "30 LPA",
    },
    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      name: "Randip",
      position: "Full stack developer",
      phone: 9487761677,
      email: "randip007leon@gmail.com",
      salary: "40 LPA",
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80",
      name: "Naveen",
      position: "Backend developer",
      phone: 7345343543,
      email: "naveenanto@gmail.com",
      salary: "30 LPA",
    },
  ];

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
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderDetails(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
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
