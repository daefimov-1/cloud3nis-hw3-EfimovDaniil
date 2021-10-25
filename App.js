import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NotesList from './screens/NotesList'
import CreatingNote from './screens/CreatingNote'
import EditingNote from './screens/EditingNote'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Заметки'>
        <Stack.Screen name="Заметки" component={NotesList} />
        <Stack.Screen name="Создание" component={CreatingNote} />
        <Stack.Screen name="Редактирование" component={EditingNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({  
  title: {
    fontsize: 31,
    textAlign: 'center',
    color: 'black'
  },
});
