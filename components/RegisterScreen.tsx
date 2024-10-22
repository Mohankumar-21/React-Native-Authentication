import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function RegisterScreen({navigation}) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("")

  const handleSubmit = () => {
    console.log(email, password);
    seterror("");
    createUserWithEmailAndPassword(auth, email, password)
    .then((data)=>{
      const user = data.user;
      console.log(user)
      AsyncStorage.setItem("user", JSON.stringify(user))
    })
    .catch((error)=>
    {
        seterror(error.message)
        console.log(error);
    })
  };


  const handleLoginPage = ()=>
  {
    navigation.navigate('Login');
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
        Register Page
      </Text>
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
        <Button onPress={handleSubmit} title="sign Up" />
      </View>
       {error &&<Text style={{color:'red'}} >{error}</Text> }  
      <Text onPress={handleLoginPage} style={{ marginTop: 10 }}>Already have a account ? Login here</Text>
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
