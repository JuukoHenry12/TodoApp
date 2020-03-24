import React, { useState } from 'react';
import { StyleSheet, Button, View, Alert, Text, FlatList, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/Todoitem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos((prevtodos)=> {
      return prevtodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((pervtodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...pervtodos
        ]
      })
    } else {
       Alert.alert('oops', 'you must be 3 characters longer', [
        {text:'understood',onPress:()=>console.log(('alert closed'))}
       ]);
    }
    
  }
 return (
   <TouchableWithoutFeedback
     onPress={() => Keyboard.dismiss()}>
     <View style={styles.container}>
       {/* header component*/}
       <Header />
       <View style={styles.content}>
         <View style={styles.list}>
           <AddTodo submitHandler={submitHandler} />
           <FlatList
             data={todos}
             renderItem={({ item }) => (
               <TodoItem item={item} pressHandler={pressHandler} />
             )}
           />
         </View>
       </View>
     </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    
  },
  list: {
    paddingTop:30,
    paddingHorizontal:20,
  }
 
});

;
