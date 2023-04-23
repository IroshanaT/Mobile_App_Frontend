import * as React from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import HomeScreen from "./screens/HomeScreen";
import LocationTracking from "./screens/Location_Tracking/LocationTracking";
import ObjectDetection from "./screens/LiveObjectDetection/ObjectDetection";
import HeathyChecker from "./screens/HeathyChecker/HeathyChecker";
import AboutUs from "./screens/AboutUs";

//Screen names
const home = "Home";
const locationTracking = "LocationTracking";
const objectDetection = "ObjectDetection";
const heathyChecker = "HeathyChecker";
const aboutUs = "AboutUs";

//Stack navigator
const Stack = createNativeStackNavigator();


export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={home} component={HomeScreen} />
        <Stack.Screen name={locationTracking} component={LocationTracking} />
        <Stack.Screen name={objectDetection} component={ObjectDetection} />
        <Stack.Screen name={heathyChecker} component={HeathyChecker} />
        <Stack.Screen name={aboutUs} component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
