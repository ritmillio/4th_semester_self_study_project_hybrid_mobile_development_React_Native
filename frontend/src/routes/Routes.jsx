import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//Screens
import ListOfOrders from "../screens/ListOfOrders";
import LoginScreen from "../screens/LoginScreen";
import ListItems from "../screens/ListItems";
import ListItemsDetailsScreen from "../screens/ListItemsDetailsScreen";
import OrderDetailScreen from "../screens/OrderDetailScreen";
import BarcodeScanner from "../screens/BarcodeScanner";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const Routes = ({ children }) => {
  const createBottomTabsUser = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        options={{ header: () => null }}
        headerMode="none"
        activeColor="#fff"
        inactiveColor="#000"
        barStyle={{
          backgroundColor: "#fc9535",
        }}
      >
        <Tab.Screen
          name="Home"
          component={ListItems}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
      </Tab.Navigator>
    );
  };

  const createBottomTabsAdmin1 = () => {
    return (
      <Tab.Navigator
        initialRouteName="Orders"
        activeColor="#fff"
        inactiveColor="#000"
        barStyle={{
          backgroundColor: "#fc9535",
        }}
      >
        <Tab.Screen
          name="Orders"
          component={ListOfOrders}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
      </Tab.Navigator>
    );
  };

  const createBottomTabsAdmin2 = () => {
    return (
      <Tab.Navigator
        initialRouteName="OrderDetailScreen"
        activeColor="#000"
        inactiveColor="#000"
        barStyle={{
          backgroundColor: "#fc9535",
        }}
      >
        <Tab.Screen
          name="Details"
          component={OrderDetailScreen}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
        <Tab.Screen
          name="Scan"
          component={BarcodeScanner}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          style={{ marginBottom: 16 }}
          options={{
            header: () => null,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Items" children={createBottomTabsUser} />
        <Stack.Screen
          name="Details"
          component={ListItemsDetailsScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Orders" children={createBottomTabsAdmin1} />
        <Stack.Screen
          name="OrderDetailScreen"
          children={createBottomTabsAdmin2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
