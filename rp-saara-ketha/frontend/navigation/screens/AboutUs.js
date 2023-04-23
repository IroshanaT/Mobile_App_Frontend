import { NativeBaseProvider, ScrollView, Box } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function AboutUs() {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <Box
          p="2"
          alignSelf={{ base: "center", md: "flex-start" }}
          mt="20%"
          rounded="xl"
          style={styles.header}
          _text={{
            fontSize: "32",
            fontWeight: "medium",
            color: "black",
            alignSelf: "center",
            letterSpacing: "lg",
          }}
          shadow={3}
        >
          About Us
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  textHeader: {
    fontSize: 24,
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
  },
  step: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20,
    fontStyle: "bold",
    fontWeight: "bold",
    color: "rgba(26, 182, 92, 1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    marginBottom: 3,
  },
  card: {
    width: "92%",
    marginBottom: 10,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginLeft: 10,
  },
  textSub: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
    marginLeft: 30,
  },
});
