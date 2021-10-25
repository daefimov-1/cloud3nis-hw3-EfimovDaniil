import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import uuid from 'react-native-uuid'

export default function Note({route, navigation}) {
    const [inputValue, setInputValue] = React.useState('')

    const {addNote} = route.params;

  return (
    <SafeAreaView>
      <TextInput 
      multiline
      numberOfLines={9}
      style={styles.input} 
        placeholder="Введите заметку"
        onChangeText={text => setInputValue(text)}/>
      <Button style={styles.button} 
      title="Создать"
      onPress={
          () => {
              addNote(
                inputValue
              )
              navigation.goBack()
          }
      }></Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    input: {
        fontsize: 32,
        color: 'black',
        margin: 6,
        padding: 10
    },
    button: {
        fontsize: 35,        
        margin: 10,
        padding: 10
    }
})