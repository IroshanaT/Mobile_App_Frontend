import { View, StyleSheet, TouchableOpacity, Image,ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
//import Constants from "../../constants/Constants";
//import axios from "axios";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  FlatList,
  Box,
  Divider,
  Heading,
  ScrollView,
  Card,
  Flex,
  Stack,
  Container,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* icons for menu in the top left corner */}

       
        <View style={styles.menu}>
          <Flex direction="row" alignItems="center">
            <IconButton
              style={styles.menuIcon}
              icon={
                <Icon
                  color={"black"}
                  as={Ionicons}
                  name="notifications-outline"
                  size={8}
                />
              }
              onPress={() => navigation.navigate("")}
            />

            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={40} color="black" />
            </TouchableOpacity>
          </Flex>
        </View>

        <Box
          p="2"
          alignSelf={{ base: "center", md: "flex-start" }}
          mt="5%"
          rounded="xl"
          style={styles.header}
          _text={{
            fontSize: "32",
            fontWeight: "medium",
            color: "black",
            alignSelf: "center",
            letterSpacing: "lg",
          }}
        >
          <Text style={styles.headerText1}
          onPress={() => navigation.navigate("")}
          >
            Hello
          
            <Text style={styles.name}>  Wikum</Text>
          </Text>
        </Box>
        {/* <Image
          //source={require("../../assets/icon.png")}
          style={styles.imageHead}
        /> */}

        <ScrollView>
          <Flex direction="row" style={styles.container}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../assets/homescreen/camera.png")}
                
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Live Object Detection</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("ObjectDetection")}
                  backgroundColor={"rgba(26, 182, 92, 1)"}
                >
                  <Text style={styles.textBtn1}>
                    <Ionicons
                      name="ios-arrow-forward"
                      size={20}
                      color="white"
                    />
                  </Text>
                </Button>
              </Flex>
            </View>
            <View style={styles.card}>
              <Image
                style={styles.image}
               source={require("../../assets/homescreen/location_tracking.png")}
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Live Location Tracker</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("LocationTracking")}
                  backgroundColor={"rgba(26, 182, 92, 1)"}
                >
                  <Text style={styles.textBtn1}>
                    <Ionicons
                      name="ios-arrow-forward"
                      size={20}
                      color="white"
                    />
                  </Text>
                </Button>
              </Flex>
            </View>
          </Flex>
          <Flex direction="row" style={styles.container}>
            <View style={styles.card}>
              <Image
                style={styles.image}
               source={require("../../assets//homescreen/Rice_Veriety.png")}
             
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Rice Veriety Selector</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("")}
                  backgroundColor={"rgba(26, 182, 92, 1)"}
                >
                  <Text style={styles.textBtn1}>
                    <Ionicons
                      name="ios-arrow-forward"
                      size={20}
                      color="white"
                    />
                  </Text>
                </Button>
              </Flex>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../assets/homescreen/heathy_detector.png")}
               
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Heathy Detector</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("HeathyChecker")}
                  backgroundColor={"rgba(26, 182, 92, 1)"}
                >
                  <Text style={styles.textBtn1}>
                    <Ionicons
                      name="ios-arrow-forward"
                      size={20}
                      color="white"
                    />
                  </Text>
                </Button>
              </Flex> 
            </View>
          </Flex>       
        </ScrollView>
      </View>
      
      
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "static",
    top: 10,
    left: -180,
    zIndex: 1,
  },
  menuIcon: {
    position: "static",
    top: 0,
    left: 360,
    zIndex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AFF3C2",
  },
  header: {
    width: "90%",
    alignSelf: "center",
    height: 60,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 5,
  },
  card: {
    width: "48%",
    marginTop: 35,
    marginLeft: "1%",
    marginRight: "1%",
    height: 200,
    paddingBottom: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 24.43,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "60%",
    alignSelf: "center",
    height: 160,
    marginTop: -20,
    marginBottom: 5,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image2: {
    width: "75%",
    marginTop: -35,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },

  text1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    width: "60%",
    marginTop: -10,
    marginLeft: 10,
  },

  card2: {
    width: "82%",
    marginBottom: 15,
    marginTop: 40,
    marginLeft: "8%",
    marginRight: "8%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 24.43,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    marginLeft: 10,
  },
  button1: {
    width: "25%",
    marginLeft: "3%",
    marginTop: -10,
    margin: 10,
    borderRadius: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  button2: {
    width: "18%",
    marginLeft: "40%",
    marginTop: 20,

    borderRadius: 40,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textBtn1: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -3,
  },
  imageHead: {
    width: "96%",
    height: 100,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
  headerText1: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    marginTop:5,
  },
  name: {
    color: "#000000",
    //rgba(26, 182, 92, 1)
  },
});
