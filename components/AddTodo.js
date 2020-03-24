import React, { useState } from 'react';
import { StyleSheet, View, TextInput,Button } from 'react-native';
export default function AddTodo({ submitHandler }) {
   const [text, settext] = useState('');
  const handleTextChange = (val) => {
    settext(val);
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        placeholder="add items .."
      />
      
      <Button
        onPress={() => submitHandler(text)}
        title="Add item" color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    
  }
})