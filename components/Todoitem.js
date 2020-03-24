import React from 'react';
import { StyleSheet, Text, TouchableOpacity ,View} from 'react-native';
//import { MaterialIcons } from '@expo/vector-icons'
export default function Todoitem({ item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.items}>
        
        <Text  style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  items: {
    padding: 16,
    marginTop:16,
    borderRadius: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
  },
  text: {
    marginLeft:10,
  }
})