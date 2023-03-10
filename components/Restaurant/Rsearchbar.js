import { StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons';
export default function Rsearchbar({ term, onTermSubmit, onTermChange }) {

  function textHandler(enteredText) {
    onTermChange(enteredText) //onTermChange function rscreen ko ho tesma hamle entered text data pathaideko ho
  }
  return (
    <View style={styles.searchbg}>
      {/* <AntDesign name='search1'/> */}
      <TextInput
        style={styles.searchText}
        placeholder='Search'
        onChangeText={textHandler}
        value={term}
        onEndEditing={onTermSubmit}

      >
      </TextInput>
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  searchbg: {
    backgroundColor: '#CAD5E2',
    display: 'flex',

    marginHorizontal: 50,
    marginVertical: 10,



  },

  searchText: {
    borderColor: 'red',
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 21,

  }
})