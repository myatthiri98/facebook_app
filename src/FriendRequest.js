import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const FriendRequest = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Friend Requests <Text  style={styles.number}>89</Text></Text>
      <TouchableOpacity><Text style={styles.friendButton}>See All</Text></TouchableOpacity>
    </View>
  )
}

export default FriendRequest

const styles = StyleSheet.create({
    header: {
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        margin: 5,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
      },
    number:{
        color: 'red',
    },
    friendButton:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    }
})