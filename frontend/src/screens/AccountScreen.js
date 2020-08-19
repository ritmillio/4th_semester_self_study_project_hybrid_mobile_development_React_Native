import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import color from "../config/color";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Orders",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: color.orange,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: color.red,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Zoltan Fodor"
          subTitle="f.zoltan.dev@gmail.com"
          image={require("../images/userico.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: color.light,
  },
});

export default AccountScreen;
