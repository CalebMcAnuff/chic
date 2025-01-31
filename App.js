import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Chic</Text>
    <Text style={styles.subtitle}>
      Your AI wardrobe assistant, designed to make outfit planning a breeze.
    </Text>
    <Button
      title="Get Recommendations"
      onPress={() => navigation.navigate("Recommendations")}
    />
  </View>
);

const RecommendationsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>AI Recommendations</Text>
    <Text style={styles.subtitle}>
      Your personalized outfit suggestions will appear here.
    </Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

