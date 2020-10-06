import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";

function HomeScreen({ navigation, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Home}>Welcome to GoodFood</Text>
      <Button
        title={!title ? "Go to Details" : title}
        onPress={() => navigation.navigate("Home2")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Home: {
    color: "green",
    fontSize: 25,
  },
});

export default HomeScreen;
