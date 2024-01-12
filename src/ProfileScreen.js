import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Post from './Post';

const FriendsList = ({friends}) => {
  const friendButton = () => {
    console.log('Friends Button Details!');
  };

  return (
    <View style={styles.friendsContainer}>
      <View style={styles.smallContainer}>
        <Text style={styles.friendsHeading}>Friends</Text>
        <Text style={styles.findFriends}>Find Friends</Text>
      </View>
      <Text>3,285 friends</Text>

      <View
        contentContainerStyle={styles.friendsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.rowContainer}>
          {friends.slice(0, 3).map(friend => (
            <TouchableOpacity key={friend.id} style={styles.friendItem}>
              <Image
                source={{uri: friend.profilePic}}
                style={styles.friendImage}
              />
              <Text style={styles.friendName}>{friend.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {friends.slice(3, 6).map(friend => (
            <TouchableOpacity key={friend.id} style={styles.friendItem}>
              <Image
                source={{uri: friend.profilePic}}
                style={styles.friendImage}
              />
              <Text style={styles.friendName}>{friend.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.detailsButtonContainer}
          onPress={friendButton}>
          <Text style={styles.editDetails}>See all friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Friend 1',
      profilePic:
        'https://i.pinimg.com/550x/b1/df/db/b1dfdb4a5241ffad69056d484bb45bf5.jpg',
    },
    {
      id: 2,
      name: 'Friend 2',
      profilePic:
        'https://i.pinimg.com/736x/8d/f7/c8/8df7c8f673c3b7914d799592cea2a67e.jpg',
    },
    {
      id: 3,
      name: 'Friend 3',
      profilePic:
        'https://i.pinimg.com/474x/32/55/7e/32557e39544c71ad493eded3df77e593.jpg',
    },
    {
      id: 4,
      name: 'Friend 4',
      profilePic:
        'https://i.pinimg.com/564x/f3/3b/6d/f33b6dbcddc9e307e2baf23d097fc75b.jpg',
    },
    {
      id: 5,
      name: 'Friend 5',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOj9LpvvCkW4axRbEqO7tyybkWZ_e72TXqwZLSOzvHRqd59w2OPZJd02eZbCDr7j6ePqw&usqp=CAU',
    },
    {
      id: 6,
      name: 'Friend 6',
      profilePic:
        'https://i.pinimg.com/originals/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg',
    },
    // Add more friends as needed
  ]);

  const addToStory = () => {
    console.log('Added to Story!');
  };

  const editProfile = () => {
    console.log('Edit Profile!');
  };

  const otherButtonAction = () => {
    console.log('Other Button Action!');
  };

  const detailsButton = () => {
    console.log('Edit Button Details!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://photo-works.net/images/europe-landscape-photo-edited.jpg',
          }}
        />
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://watermark.lovepik.com/photo/20211201/large/lovepik-forest-girl-back-view-picture_501359035.jpg',
              }}
            />
          </View>
          <Text style={styles.profileName}>Myat Thiri</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={addToStory}>
            <Text style={styles.buttonText}>+ Add to Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={editProfile}>
            <Text style={styles.buttonText}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-rounded/24/edit--v1.png',
                }}
                style={styles.icon}
              />
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={otherButtonAction}>
            <Text style={styles.buttonText}>...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsItem}>
            <Image
              source={{
                uri: 'https://img.icons8.com/sf-regular-filled/48/graduation-cap.png',
              }}
              style={styles.icon}
            />
            <Text>Studied at Coursera</Text>
          </View>
          <View style={styles.detailsItem}>
            <Image
              source={{uri: 'https://img.icons8.com/ios-glyphs/30/home.png'}}
              style={[styles.icon, {marginRight: 8}]}
            />
            <Text>Lives in Yangon</Text>
          </View>
          <View style={styles.detailsItem}>
            <Image
              source={{
                uri: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-more-interface-kiranshastry-solid-kiranshastry.png',
              }}
              style={[styles.icon, {marginRight: 8}]}
            />
            <Text>See your About info</Text>
          </View>
          <TouchableOpacity
            style={styles.detailsButtonContainer}
            onPress={detailsButton}>
            <Text style={styles.editDetails}>Edit public details</Text>
          </TouchableOpacity>
        </View>

        {/* Friends Section */}
        <FriendsList friends={friends} />

        {/* Posts Section */}
        <View style={styles.postContainer}>
          <Text style={styles.friendsHeading}>Posts</Text>
          <View style={styles.iconsContainer}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/fluency-systems-filled/48/sorting-options.png',
              }}
            />
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/settings.png',
              }}
            />
          </View>
        </View>

        {/* Profile Image and Status Update */}
        <View style={styles.profileUpdateContainer}>
          <Image
            style={styles.userimage}
            source={{
              uri: 'https://watermark.lovepik.com/photo/20211201/large/lovepik-forest-girl-back-view-picture_501359035.jpg',
            }}
          />
          <TextInput
            style={styles.statusInput}
            placeholder="What's on your mind?"
          />
        </View>

        {/* Footer*/}
        <View style={styles.footerButtonsContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/30/live-video-on--v2.png',
              }}
            />
            <Text style={styles.footerButtonText}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.icons8.com/fluency/48/stack-of-photos.png',
              }}
            />
            <Text style={styles.footerButtonText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://img.icons8.com/external-creatype-flat-colourcreatype/64/external-adventure-camping-survive-creatype-flat-colourcreatype-7.png',
              }}
            />
            <Text style={styles.footerButtonText}>Life Event</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Post/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  profileContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: -70,
    margin: 7,
  },
  profileImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'white',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  primaryButton: {
    backgroundColor: '#0084ff',
  },
  secondaryButton: {
    backgroundColor: '#3b5998',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  detailsItem: {
    fontSize: 16,
    marginVertical: 5,
    flexDirection: 'row',
  },
  detailsButtonContainer: {
    borderWidth: 1,
    borderColor: '#0084ff', // Border color
    borderRadius: 5,
    backgroundColor: '#e6f7ff', // Background color
    padding: 10,
    marginTop: 10,
  },
  editDetails: {
    color: '#0084ff',
    fontSize: 16,
    textAlign: 'center',
  },
  friendsContainer: {
    marginTop: 20,
  },
  smallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  friendsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  findFriends: {
    fontWeight: 'bold',
  },

  friendName: {
    marginTop: 5,
  },

  friendsScrollView: {
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  friendItem: {
    width: 100,
    marginRight: 15,
    alignItems: 'center',
  },

  friendImage: {
    width: '100%',
    height: 100,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },

  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  profileUpdateContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  statusInput: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    flex: 1,
  },
  
  image: {
    width: 22,
    height: 22,
  },
  userimage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
  },

  footerButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
    marginHorizontal: 6, 
    marginBottom: 10,
  },
  
});

export default ProfileScreen;
