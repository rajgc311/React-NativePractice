import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonContainer,styles.pressed]: styles.buttonContainer}


        android_ripple={{ color: "black" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    // backgroundColor:'green',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "90%",

    backgroundColor: "#ff2626",
    margin: 10,
    borderRadius: 28,
    paddingVertical: 7,
    alignItems: "center",
    elevation: 8,
    color: "white",
    padding:60
  },
  buttonText:{
    color:'white'
  },
  pressed:{
    opacity:0.75
  }
});
