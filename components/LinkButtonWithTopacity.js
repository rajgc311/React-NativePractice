import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LinkButtonWithTopacity() {
    const openLink =(url)=>{
        Linking.openURL(url);
    }

  return (
    <View style={styles.container}>
      <Text>hi its me link</Text>
        <TouchableOpacity onPress={() => openLink('https://reactnative.dev/docs/button')}>
      <Text style={[styles.textButton,styles.textButton1]}>Read More</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.facebook.com/rajkumar.gc.35')}>
      <Text style={[styles.textButton,styles.textButton2]}>Follow me</Text>
      </TouchableOpacity>

    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginVertical:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    textButton:{
      padding:8,
      
      borderRadius:7
    },
    textButton1:{
      backgroundColor:'#ff8000',
    },
    textButton2:{
      backgroundColor:'#ee2260',
    }
})