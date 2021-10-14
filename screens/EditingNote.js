import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function Note({route, navigation}) {
    const {editNote, id, text} = route.params;
    const [inputValue, setInputValue] = React.useState(text)
    
  return (
    <SafeAreaView>
      <TextInput 
      multiline
      numberOfLines={9}
      style={styles.input} 
        defaultValue={text}
        onChangeText={text => setInputValue(text)}/>
      <Button style={styles.button} 
      title="Изменить"
      onPress={
          () => {
              editNote(
                id,
                inputValue
              )
              navigation.goBack()
          }
      }></Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    title: {
        fontsize: 32,
        textAlign: 'center',
        color: 'black'
    },
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