// Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Facebook</Text>
      <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <Image source={{
          uri: 'https://img.icons8.com/ios/50/000000/search--v1.png',
        }} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Messenger icon pressed')}>
        <Image source={{
          uri: 'https://img.icons8.com/color/48/facebook-messenger--v1.png',
        }} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "blue"
  },
  icon: {
    width: 24, 
    height: 24,
    left: 222,
    margin: 5
  }
});

export default Header;
