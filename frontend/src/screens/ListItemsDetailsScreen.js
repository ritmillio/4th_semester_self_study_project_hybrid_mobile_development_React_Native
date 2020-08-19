import React, { Component } from 'react';
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import color from "../config/color";

class ListItemsDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {route} = this.props;
    const {navigation} = this.props;
    const {item} = route.params;
    return (
      <View>
        <Image
          style={styles.image}
          source={require("../images/product01.jpg")}
        ></Image>
        <View style={styles.container}>
          <AppText style={styles.title}>{"Name : " + JSON.stringify(item.name)}</AppText>
          <AppText style={styles.title}>{"Item ID :" + JSON.stringify(item.itemId)}</AppText>
          <AppText style={styles.price}>{"Price :" + JSON.stringify(item.price) + "DKK"}</AppText>
          <AppText style={styles.onstock}>{"QuantityOnStock : " + JSON.stringify(item.quantityOnStock)}</AppText>
          <AppText>
          {"Description :" + JSON.stringify(item.description)}
          </AppText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: color.green,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 6,
  },
  onstock: {
    color: color.red,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ListItemsDetailsScreen;
