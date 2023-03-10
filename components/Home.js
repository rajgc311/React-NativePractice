import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Home({ navigation }) {
    return (
        <View style={styles.buttons}>
            <Text>Welcome to the Beautiful Home</Text>
            <View style={styles.buttons}>

                <Button title='Take me to card' onPress={() => navigation.navigate('Card')} />
            </View>
            <View style={styles.buttons}>
                <Button title='Take me to FancyCard' onPress={() => navigation.navigate('FancyCard')} />

            </View>
            <View style={styles.buttons}>
                <Button title='Take me to LinkButton' onPress={() => navigation.navigate('LinkButtonWithTopacity')} />

            </View>

            <View style={styles.buttons}>
                <Button title='Take me to Restaurant App' onPress={() => navigation.navigate('Rapp')} />

            </View>

            <View style={styles.buttons}>
                <Button title='Take me to Quote Generator App' onPress={() => navigation.navigate('QuoteGenerator')} />

            </View>

            <View style={styles.buttons}>
                <Button title='Take me to Game App' onPress={() => navigation.navigate('GameApp')} />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        justifyContent:'center',
        width:'50%',
            marginVertical:10
    }
})