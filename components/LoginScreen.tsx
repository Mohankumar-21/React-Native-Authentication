import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        navigation.navigate("dashboard");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>Login Page</Text>
      <View>
        <TextInput
          onChangeText={setEmail}
          style={styles.DesignText}
          placeholder="enter your email..."
        />
        <TextInput
          onChangeText={setPassword}
          style={styles.DesignText}
          placeholder="enter your password..."
          secureTextEntry
        />
      </View>
      <View>
        <Button onPress={handleSubmit} title="Login" />
      </View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text onPress={() => navigation.navigate("register")} style={{ marginTop: 10 }}>Create an account? Register here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  DesignText: {
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
    height: 30,
    padding: 5,
    width: 250,
    marginBottom: 10,
  },
});
