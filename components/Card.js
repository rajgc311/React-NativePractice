import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    function showMe(){
        console.log("its me");
    }
  return (
    <View>
        <ScrollView horizontal>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}> 
            <Text> I</Text> 
        </View>
        {/* styles.card chai sabai card ma eutai design vayera and 
        styles.card 1,2,3 chai aafno aafno card ko design */}
        <View style={[styles.card,styles.card1]}> 
        <Text>am</Text>
        </View>
        
        <View style={[styles.card,styles.card2]}>
             <Text>Raj</Text>
             </View>
        <View style={[styles.card,styles.card3]}>
             <Text>Kumar</Text>
             </View>
        <View style={[styles.card,styles.card4]}> 
        <Text>G.C.</Text>
        </View>
        <View style={[styles.card,styles.card5]}> 
        <Text>From</Text>
        </View>
        <View style={[styles.card,styles.card6]}> 
        <Text>Gulmi</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        marginVertical:10
    },
    card:{
        padding:10,
        margin:10,
        width:100,
        height:100,
        backgroundColor:'#2c81e9',
        justifyContent:'center',
        alignItems:'center'
    },
    card1:{
        backgroundColor:'red'
    },
    card2:{
        backgroundColor:'green'
    },
    card3:{
        backgroundColor:'blue'
    },
    card4:{
        backgroundColor:'yellow'
    },
    card5:{
        backgroundColor:'red'
    },
    card6:{
        backgroundColor:'green'
    },
    card7:{
        backgroundColor:'red'
    },

    
    
    
    

});