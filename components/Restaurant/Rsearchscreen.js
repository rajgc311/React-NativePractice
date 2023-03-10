import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Rsearchbar from './Rsearchbar'

export default function Rsearchscreen() {
    const [term, setTerm] = useState('');
    // function onTermChange(enteredText){
    //     setTerm(enteredText)
    // }
    return (
        <View>
            <Rsearchbar              
            term={term}
                onTermChange={(enteredText) => setTerm(enteredText)} //paramter ma enteredText data aauxa Rsearchbar bata, work as above comment function
                onTermSubmit={() => console.log("Term Submitted")}
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})