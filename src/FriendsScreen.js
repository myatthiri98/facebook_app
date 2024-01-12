import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import FriendRequest from './FriendRequest';
import FriendRequestCard from './FriendRequestCard';

const FriendsScreen = () => {
  const [activeTab, setActiveTab] = useState('Suggestions');

  const onPressFunction = screen => {
    console.log(`${screen} pressed`);
    // Add your navigation logic here if needed
    setActiveTab(screen);
  };

  const friendRequests = [
    { id: 1, name: 'John Doe', profilePhoto: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png', mutualFriends: 5 },
    { id: 2, name: 'Jane Smith', profilePhoto: 'https://media.nojoto.com/content/media/29327437/2023/07/profile/5661949b2ba733966ab852e5832f41ac_29327437/default.jpg', mutualFriends: 3 },
    { id: 3, name: 'Taylor', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncHEgq9yfgjSRD9akGwPpbskOilO44VWTLw&usqp=CAU', mutualFriends: 5 },
    { id: 4, name: 'Rose', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40o8q79k7bRem8Lx_ONaef2S55f0gErjXdA&usqp=CAU', mutualFriends: 6 },
    { id: 5, name: 'Dua Lipa', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU', mutualFriends: 7 },
    { id: 6, name: 'Kate', profilePhoto: 'https://media.nojoto.com/content/media/29327437/2023/07/profile/5661949b2ba733966ab852e5832f41ac_29327437/default.jpg', mutualFriends: 8 },
    { id: 7, name: 'John Doe', profilePhoto: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png', mutualFriends: 5 },
    { id: 8, name: 'Jane Smith', profilePhoto: 'https://media.nojoto.com/content/media/29327437/2023/07/profile/5661949b2ba733966ab852e5832f41ac_29327437/default.jpg', mutualFriends: 3 },
    { id: 9, name: 'Taylor', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncHEgq9yfgjSRD9akGwPpbskOilO44VWTLw&usqp=CAU', mutualFriends: 5 },
    { id: 10, name: 'Rose', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40o8q79k7bRem8Lx_ONaef2S55f0gErjXdA&usqp=CAU', mutualFriends: 6 },
    { id: 11, name: 'Dua Lipa', profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU', mutualFriends: 7 },
    { id: 12, name: 'Kate', profilePhoto: 'https://media.nojoto.com/content/media/29327437/2023/07/profile/5661949b2ba733966ab852e5832f41ac_29327437/default.jpg', mutualFriends: 8 },
    // Add more users as needed
  ];



  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/search--v1.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            styles.firstTab,
            activeTab === 'Suggestions' && styles.activeTab,
          ]}
          onPress={() => onPressFunction('Suggestions')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Suggestions' && styles.activeTabText,
            ]}>
            Suggestions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'YourFriends' && styles.activeTab]}
          onPress={() => onPressFunction('YourFriends')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'YourFriends' && styles.activeTabText,
            ]}>
            Your Friends
          </Text>
        </TouchableOpacity>
      </View>
      <FriendRequest />
      <FriendRequestCard users={friendRequests} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 6,
  },
  header: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    paddingLeft: 15,
  },
  icon: {
    width: 32,
    height: 32,
    margin: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    margin: 5,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  activeTab: {
    borderBottomColor: 'blue',
    backgroundColor: 'grey',
  },
  activeTabText: {
    color: 'blue',
  },
});

export default FriendsScreen;
