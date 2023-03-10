import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Test() {
    function showit(){
        console.log("show me");
    }
  return (
    <View>
      <Text>Test</Text>
      <Button title='Click me' onPress={showit}/>
    </View>
  )
}

const styles = StyleSheet.create({})