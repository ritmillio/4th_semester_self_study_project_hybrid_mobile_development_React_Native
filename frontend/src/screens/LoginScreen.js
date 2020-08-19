import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

function LoginScreen({ props, navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/icon.jpg")} />
        <Text style={styles.text}>Making sense of technology</Text>
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          autoCapitalize="none"
          placeholder="Username"
          autoCorrect={false}
          keyboardType="default"
          onChangeText={(text) => setUsername(text)}
        />
        <AppTextInput
          placeholder="Password"
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          style={styles.button}
          onPress={() => {
            if (username === "customer123" && password === "customer123") {
              navigation.navigate("Items");
            } else if (username === "admin123" && password === "admin123") {
              navigation.navigate("Orders");
            } else {
              Alert.alert("Wrong username or password");
            }
          }}
          title="Login"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    textTransform: "uppercase",
    fontStyle: "italic",
    padding: 10,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 360,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 600,
  },
});

export default LoginScreen;
