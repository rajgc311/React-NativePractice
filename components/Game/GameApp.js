import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import StartGameScreen from "./GameScreens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function GameApp() {
  return (
    // <View style={styles.rootstyle}>
    //linear gradient replace view to use gradient color
    <LinearGradient colors={["#E03B8B", "#8D3DAF"]} style={styles.rootstyle}>
      <ImageBackground
        style={styles.rootstyle}
        imageStyle={styles.bgImage} // for the image that we used in image background
        source={{
          uri: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        resizeMode="cover"
      >
        {/* we used both,firstly lineargradeinet and secondly background image in whole screen(flex:1 by styles.rootstyle) */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            
            color: "white",
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          Game App
        </Text>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  rootstyle: {
    flex: 1, //flex 1 garyo vane whole screen lai hunxa so bg color whole screen ma basxa natra only startgamescreen component ko size anusar basxa
    // backgroundColor: "#8D3DAF", for only view
  },
  bgImage: {
    opacity: 0.15,
  },
});
