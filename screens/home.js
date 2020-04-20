import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const home = () => {
  const data = [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      name: "Nobel",
      position: "Web developer",
    },
    {
      id: 2,
      photo:
        "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      name: "Shibu",
      position: "Senior Web developer",
    },
    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      name: "Randip",
      position: "Full stack developer",
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80",
      name: "Naveen",
      position: "Backend developer",
    },
  ];

  const renderDetails = data.map((item) => {
    return (
      <Card style={styles.card} key={item.id}>
        <View style={styles.cardView}>
          <Image
            style={styles.img}
            source={{
              uri: item.photo,
            }}
          />
          <View>
            <Text>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  });
  return <View>{renderDetails}</View>;
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 5,
    backgroundColor: "#6285ff",
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
});

export default home;
