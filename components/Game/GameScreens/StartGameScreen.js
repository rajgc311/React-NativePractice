import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../GameComponents/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.buuttonsContainer}>
        <View style={styles.buuttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buuttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
  
    alignItems: "center",
    padding: 16,
    marginVertical: 12,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#ff8080",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  inputNumber: {
    height: 40,
    width: 50, // 50 width of inputContainer
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff00",
    borderBottomColor: "#ffff00",
    borderBottomWidth: 2,
    textAlign: "center", // yesle chai type gareko number inputNumber area bhitra center ma rakhxa
  },
  buuttonsContainer: {

    flexDirection: "row",
  },
  buuttonContainer: {

  },

});
