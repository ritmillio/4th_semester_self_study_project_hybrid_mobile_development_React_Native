import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const orders = [
  {
    id: 1,
    title: "Order001",
    description: "order01",
    image: require("../images/userico.png"),
  },
  {
    id: 2,
    title: "Order002",
    description: "order02",
    image: require("../images/userico.png"),
  },
  {
    id: 3,
    title: "Order003",
    description: "order03",
    image: require("../images/userico.png"),
  },
];

function ListOfOrders({ props, navigation }) {
  return (
    <Screen>
      <FlatList
        data={orders}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate("OrderDetailScreen")}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default ListOfOrders;
