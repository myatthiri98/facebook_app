import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

const NotificationItem = ({ text, time, profileImage, detailsIcon }) => (
  <TouchableOpacity style={styles.notificationItem}>
    <View style={styles.notificationContent}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationText}>{text}</Text>
        <Text style={styles.notificationTime}>{time}</Text>
      </View>
      {detailsIcon && (
        <Image source={{ uri: detailsIcon }} style={styles.detailsIcon} />
      )}
    </View>
  </TouchableOpacity>
);

const NotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/search--v1.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.new}>New</Text>
      {/* Add your notification items here */}
      <NotificationItem
        text="John Doe liked your post."
        time="2h ago"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Jane Smith commented on your photo."
        time="5h ago"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncHEgq9yfgjSRD9akGwPpbskOilO44VWTLw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10h ago"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      {/* Add more items as needed */}
      <Text style={styles.new}>Today</Text>
      <NotificationItem
        text="John Doe liked your post."
        time="Yesterday at 8:28 pm"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Jane Smith commented on your photo."
        time="Yesterday at 10:12 pm"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncHEgq9yfgjSRD9akGwPpbskOilO44VWTLw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="Yesterday at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <Text style={styles.new}>Earlier</Text>
      <NotificationItem
        text="John Doe liked your post."
        time="Sun at 8:28 pm"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Jane Smith commented on your photo."
        time="14 Oct at 10:12 pm"
        profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncHEgq9yfgjSRD9akGwPpbskOilO44VWTLw&usqp=CAU"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="13 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="12 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="11 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
      <NotificationItem
        text="Peach replied to a comment that you're tagged in."
        time="10 Oct at 11:12 pm"
        profileImage="https://i.pinimg.com/564x/4e/81/e9/4e81e95cc46ef75bb2d7493bf70fd643.jpg"
        detailsIcon="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  new: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 15,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f0f2f5',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
  },
  notificationTime: {
    fontSize: 12,
    color: '#777',
  },
  detailsIcon: {
    width: 24,
    height: 24,
  },
});

export default NotificationsScreen;
