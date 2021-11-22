import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SingleTodo({todo}) {
    return (
        <View style={styles.todo}>
            <Text>{todo.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
todo:{
flexDirection:'row',
marginHorizontal:10,
elevation:5,
shadowColor:'black',
backgroundColor:'white',
paddingHorizontal:20,
paddingVertical:10,
marginBottom:10,
borderRadius:50
}
})