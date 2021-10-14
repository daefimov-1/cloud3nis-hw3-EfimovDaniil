import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, FlatList, Button } from 'react-native';
import NoteItem from '../components/NoteItem';

export default function Note({navigation}) {

  const [noteItems, setNoteItems] = React.useState([
    {id: 1, text: "React Native 1"},
    {id: 2, text: "React Native 2"},
    {id: 3, text: "React Native 3"},
  ])

  const addNote = (text) =>{
    setNoteItems(list => [
      ...list,
      {id: list.length+1, text: text}
    ])
  }
  const editNote = (index, text) =>{
    setNoteItems(list => {
      list[index-1] = {id: index, text: text}
      console.log(list)
      let arr = [...list];
      return arr
    })
  }

  return (
    <SafeAreaView>
      <Button title="Добавить заметку" onPress={() => {navigation.navigate('Создание', {addNote})}} />     
      <FlatList 
        data={noteItems}
        keyExtractor={item => item.id}
        renderItem = { ({ item }) => (

          <TouchableOpacity style={styles.note}
        onPress={() => {navigation.navigate('Редактирование', {editNote: editNote, id: item.id , text: item.text})}}>
            <Text style={styles.textNote}>
                {item.text}
            </Text>
            <TouchableOpacity>
                <Text style={styles.textDone}>
                    &#10004;
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
          
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    title: {
        fontsize: 32,
        textAlign: 'center',
        color: 'black'
    },
    note: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 6,
      margin: 6,
  },
  textNote: {
      font: 10
  },
  textDone:{
      color: 'blue'
  }
})