import * as React from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import HomeScreen from "./screens/HomeScreen";
import LocationTracking from "./screens/Location_Tracking/LocationTracking";

//Screen names
const home = "Home";
const locationTracking = "LocationTracking";


//Stack navigator
const Stack = createNativeStackNavigator();


export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={home} component={HomeScreen} />
        <Stack.Screen name={locationTracking} component={LocationTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
