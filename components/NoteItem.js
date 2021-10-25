import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const NoteItem = ({item}) =>{
    return (
        <TouchableOpacity style={styles.note}
        onPress={() => {navigation.navigate('Редактирование')}}>
            <Text style={styles.textNote}>
                {item.text}
            </Text>
            <TouchableOpacity>
                <Text style={styles.textDone}>
                    &#10004;
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
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

export default NoteItem