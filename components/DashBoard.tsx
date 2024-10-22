import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export function DashBoard({navigation}) {


    const handleLogout = () =>
    {
       signOut(auth).then(()=>
    {
        navigation.navigate('Login');
    })

    }
  
    return (
       <View>
           <Text>Welcome to DashBoard</Text>
           <Button onPress={handleLogout} title="logout" />
       </View>
    )
}