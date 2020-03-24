import React from 'react';
import { StyleSheet, Button, View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
export default function Header() {
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contain:{
    height:50,
    backgroundColor: 'coral',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
})