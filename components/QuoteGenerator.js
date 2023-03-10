import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function QuoteGenerator() {
    const [quote,setQuote]=useState('');
    const fetchAdvice = ()=>{
        fetch('https://api.adviceslip.com/advice').then((data)=>{
            return data.json();
        }).then((completedata)=>{
            // console.log(completedata.slip.advice);
            const {advice}=completedata.slip;
            // console.log(advice);
            setQuote(advice);
        })
    }
  return (
    <View style={styles.quoteContainer}>
      <Text>QuoteGenerator</Text>
      <Text style={styles.quoteText}>Quote is: {quote}</Text>
      <Button title='Generate new one' onPress={fetchAdvice}/>
    </View>
  )
}

const styles = StyleSheet.create({
    quoteContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    quoteText:{
        marginVertical:30,
        fontSize:22
    }
})