import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FancyCard</Text>
      <Image 
      style={styles.cardImage}
      source={{uri:'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#758283',
        marginHorizontal:20
    },
    headingText:{
        fontWeight:'bold',
        marginHorizontal:10
    },
    cardImage:{
        height:400,
        borderRadius:10,
        borderBottomEndRadius:10
    }
})