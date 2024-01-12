import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FriendRequestCard = ({ users }) => {
  const handleConfirm = (userId) => {
    // Logic to confirm friend request for the user with the given userId
  };

  const handleDelete = (userId) => {
    // Logic to delete friend request for the user with the given userId
  };

  return (
    <View>
      {users.map((user) => (
        <View key={user.id} style={styles.cardContainer}>
          <Image source={{ uri: user.profilePhoto }} style={styles.profilePhoto} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.mutualFriends}>{`${user.mutualFriends} mutual friends`}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleConfirm(user.id)}>
                <Text>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleDelete(user.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    margin: 5,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoContainer: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mutualFriends: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginRight: 30, // Add space between buttons
    padding: 8, // Add padding for better touch area
    backgroundColor: 'lightblue', // Customize button background color
    borderRadius: 5, // Add border radius for rounded corners
    paddingHorizontal: 30,
  },
});

export default FriendRequestCard;
