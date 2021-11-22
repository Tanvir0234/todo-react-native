
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,StatusBar, ScrollView} from 'react-native';
import SingleTodo from './Components/SingleTodo';

export default function App() {
  const [todo,setTodo] = useState('');
  const [todos,SetTodos] = useState([]);


const handleAddTodo =()=>{
  if(!todo) return;
  
  SetTodos([...todos,{id:Date.now(),text:todo}]);
  setTodo("");
}


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter a Todo"
          style={styles.input}
        />
        <TouchableOpacity  onPress={handleAddTodo}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.list}>
        
        {
          todos.map(todo=><SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
         ></SingleTodo>)
        }
      
        
      </ScrollView>





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#814de7',
    alignItems: 'center'

  },
  heading: {
    marginVertical: 10,
    paddingTop: 50,
    fontSize: 30,
    color: '#fff',
    fontWeight: "700"
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:10
  },
  input:{
    flex:1,
    shadowColor:'black',
    backgroundColor:'white',
    elevation:10,
    marginRight:5,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:50
  },
  button:{
    padding:15,
    elevation:10,
    borderRadius:50,
    backgroundColor:'#fff'
  },
  
});
