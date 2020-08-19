import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      search: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "http://192.168.0.116:5000/items";
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setResult(json);
    } catch (err) {
      this.setState({ loading: false, error: err });
    }
  };

  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false,
    });
  };

  render() {
    const { navigation } = this.props;
    return this.state.error != null ? (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ) : (
      <Screen style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.itemId}
          renderItem={({ item }) => (
            <Card
              style={{ padding: 20 }}
              title={item.name}
              subTitle={"Quantity on stock :" + item.quantityOnStock}
              onPress={() => navigation.navigate("Details", { item })}
            />
          )}
        />
      </Screen>
    );
  }
}

export default ListItems;
