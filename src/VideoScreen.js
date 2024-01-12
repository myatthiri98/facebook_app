import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import TabNav from './TabNav';


const VideoScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch your custom posts data or set it directly
    const customPosts = [
      {
        id: 1,
        userName: 'Peach',
        userProfileImage:
          'https://cdn.dribbble.com/users/366179/screenshots/4833223/attachments/1085821/story_templatefashion.jpg?resize=400x300&vertical=center',
        content:
          'Just embraced the sunny vibes today! 🌞 Spent the afternoon at the park, enjoying the warmth, greenery, and good company. Sometimes, all you need is a breath of fresh air. #SunnyDays #NatureLover',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseVyviBAoDoHlyXvySDdsHEuoe845bYbX6aoDApHaOPnRRFej62LpbVQVMinPYNOohf8&usqp=CAU',
      },
      {
        id: 2,
        userName: 'FoodieExplorer',
        userProfileImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-YIPLhIBLVQKh_S4BNo18b03Ct5P_iYFeBBjDCYx&s',
        content:
          'Just discovered a hidden gem in the city—[Restaurant Name]. 🍽️ The flavors were out of this world! Swipe left to see the mouthwatering dishes. #FoodieAdventures',
        image:
          'https://plus.unsplash.com/premium_photo-1663850685202-7ef603771118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
      {
        id: 3,
        userName: 'BookWorm',
        userProfileImage:
          'https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg',
        content:
          "Dive into a good book and escape reality. 📚 Currently reading '[Book Title]' by [Author]. The plot twists are keeping me hooked! Any book recommendations? #BookLover",
      },
      {
        id: 4,
        userName: 'TravelDreamer',
        userProfileImage:
          'https://i.pinimg.com/550x/70/79/a6/7079a6498a01e68e75ec0b8476caead1.jpg',
        content:
          "Wanderlust alert! ✈️ Explored the charming streets of [City Name]. From historic landmarks to local markets, every corner had a story to tell. Can't wait for the next adventure! #TravelDiaries",
        image:
          'https://media1.popsugar-assets.com/files/thumbor/uf_lnllMspAA3dUoApLHV1pco78=/fit-in/550x550/filters:format_auto():upscale()/2013/09/04/073/n/1922441/fcae5df5ab359e8d_travel-photo-checklist.jpg',
      },
      {
        id: 5,
        userName: 'BookWorm',
        userProfileImage:
          'https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg',
        content:
          "Dive into a good book and escape reality. 📚 Currently reading '[Book Title]' by [Author]. The plot twists are keeping me hooked! Any book recommendations? #BookLover",
      },
      {
        id: 6,
        userName: 'FoodieExplorer',
        userProfileImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-YIPLhIBLVQKh_S4BNo18b03Ct5P_iYFeBBjDCYx&s',
        content:
          'Just discovered a hidden gem in the city—[Restaurant Name]. 🍽️ The flavors were out of this world! Swipe left to see the mouthwatering dishes. #FoodieAdventures',
        image:
          'https://plus.unsplash.com/premium_photo-1663850685202-7ef603771118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
      {
        id: 7,
        userName: 'Peach',
        userProfileImage:
          'https://cdn.dribbble.com/users/366179/screenshots/4833223/attachments/1085821/story_templatefashion.jpg?resize=400x300&vertical=center',
        content:
          'Just embraced the sunny vibes today! 🌞 Spent the afternoon at the park, enjoying the warmth, greenery, and good company. Sometimes, all you need is a breath of fresh air. #SunnyDays #NatureLover',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseVyviBAoDoHlyXvySDdsHEuoe845bYbX6aoDApHaOPnRRFej62LpbVQVMinPYNOohf8&usqp=CAU',
      },
      {
        id: 8,
        userName: 'FoodieExplorer',
        userProfileImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-YIPLhIBLVQKh_S4BNo18b03Ct5P_iYFeBBjDCYx&s',
        content:
          'Just discovered a hidden gem in the city—[Restaurant Name]. 🍽️ The flavors were out of this world! Swipe left to see the mouthwatering dishes. #FoodieAdventures',
        image:
          'https://plus.unsplash.com/premium_photo-1663850685202-7ef603771118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
    ];

    setPosts(customPosts);
  }, []);
  
  const handleReactionPress = (postId, reactionType) => {
    setPosts(prevPosts => (
      prevPosts.map(post => (
        post.id === postId ? { ...post, reaction: reactionType } : post
      ))
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Video</Text>

        <TouchableOpacity onPress={() => console.log('Profile icon pressed')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/user-male-circle.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/search--v1.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TabNav/>
      {posts.map(post => (
  <View key={post.id} style={postStyles.postContainer}>
    <View style={postStyles.postHeader}>
      <Image
        source={{uri: post.userProfileImage}}
        style={postStyles.userProfileImage}
      />
      <Text style={postStyles.postUserName}>{post.userName}</Text>
    </View>
    <Text style={postStyles.postContent}>{post.content}</Text>
    {post.image && (
      <Image source={{uri: post.image}} style={postStyles.postImage} />
    )}

    {/* Post Footer */}
    <View style={postStyles.postFooter}>
      {/* Like Button */}
      <TouchableOpacity style={postStyles.postButton} onPress={() => console.log('Like pressed')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/000000/facebook-like--v1.png'}}
          style={{width: 20, height: 20}}
        />
        <Text style={postStyles.postButtonText}>Like</Text>
      </TouchableOpacity>

      {/* Comment Button */}
      <TouchableOpacity style={postStyles.postButton} onPress={() => console.log('Comment pressed')}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png'}}
          style={{width: 20, height: 20}}
        />
        <Text style={postStyles.postButtonText}>Comment</Text>
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity style={postStyles.postButton} onPress={() => console.log('Share pressed')}>
        <Image
          source={{uri: 'https://img.icons8.com/sf-ultralight/25/forward-arrow.png'}}
          style={{width: 20, height: 20}}
        />
        <Text style={postStyles.postButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  </View>
))}
    </ScrollView>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    paddingLeft: 15,
  },
  icon: {
    width: 30,
    height: 30,
    left: 200,
    margin: 5,
  },
});

const postStyles = StyleSheet.create({
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postUserName: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  postContent: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  postButtonText: {
    marginLeft: 5,
  },
});

export default VideoScreen;
