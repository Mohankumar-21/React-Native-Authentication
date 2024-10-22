import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { LoginScreen } from "@/components/LoginScreen";
import { RegisterScreen } from "@/components/RegisterScreen";
import { DashBoard } from "@/components/DashBoard";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState("Login"); // Default to Login

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setInitialRoute("dashboard");
      } else {
        setInitialRoute("Login");
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
