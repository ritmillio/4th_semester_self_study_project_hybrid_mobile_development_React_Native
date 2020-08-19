import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import color from "../config/color";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ListItemSeparator from "../components/ListItem";

const order = [
  {
    orderId: "ORDER001",
  },
];

function ListItemsDetailsScreen({ props, navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>Order ID : ORDER001</AppText>
        <AppText>from : Sensor Aps</AppText>
        <AppText>Ordered : Sensor01</AppText>
        <AppText>Quantity : 12</AppText>
        <AppText>created order : 14.05.2020</AppText>
        <AppText>
          shipping to : 9000 Helgolandsgade 4, Aalborg , Denmark
        </AppText>
        <AppText>created order : 14.05.2020</AppText>
      </View>
      <View style={styles.buttonQR}>
        <AppText style={styles.buttonText}>Assign order to a Box:</AppText>
        <AppButton title="Generate QR code" onPress={console.log()} />
      </View>
      <View style={styles.buttonScanItem}>
        <AppText style={styles.buttonText}>Scan each item</AppText>
        <AppButton
          title="Scan Items"
          onPress={(onPress) => navigation.push("Scan")}
        />
      </View>
      <View style={styles.buttonFinalizeOrder}>
        <AppText style={styles.buttonText}>
          Finalize order, send it to currier
        </AppText>
        <AppButton title="Ready for shipment" onPress={console.log()} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonQR: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonScanItem: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonFinalizeOrder: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default ListItemsDetailsScreen;
