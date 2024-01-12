import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
// import CommentsBottomSheet from './CommentsButtonSheet';
const screenHeight = Dimensions.get('window').height;

// Post component
const Post = ({post}) => {
  const [isLiked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const reactionIcons = [
    'https://img.icons8.com/color/48/000000/thumb-up--v1.png',
    'https://img.icons8.com/fluency/48/love-circled.png',
    'https://img.icons8.com/emoji/48/face-with-tears-of-joy.png',
    'https://img.icons8.com/emoji/48/face-with-open-mouth.png',
    'https://img.icons8.com/emoji/48/face-with-steam-from-nose.png',
    'https://img.icons8.com/cotton/64/sad.png',
    'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-care-sauna-flatart-icons-lineal-color-flatarticons-3.png',
  ];

  const [iconUrl, setIconUrl] = useState(reactionIcons[0]);
  const reactionTexts = ['Like', 'Love', 'Haha', 'Wow', 'Angry', 'Sad', 'Care'];

  const getRandomReaction = () => {
    const randomIndex = Math.floor(Math.random() * reactionIcons.length);
    return {
      icon: reactionIcons[randomIndex],
      text: reactionTexts[randomIndex],
    };
  };

  const handleLikePress = () => {
    const randomReaction = getRandomReaction();
    setLiked(!isLiked);
    setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));
    setSelectedReaction(randomReaction.text);
    setIconUrl(randomReaction.icon + `?${Date.now()}`);
  };

  const handleReactionPress = () => {
    const randomReaction = getRandomReaction();
    setSelectedReaction(randomReaction.text);
    setIconUrl(randomReaction.icon);
    // Implement your logic to handle the reaction
  };

  const [isCommentModalVisible, setCommentModalVisible] = useState(false);

  const toggleCommentModal = () => {
    setCommentModalVisible(!isCommentModalVisible);
  };

  const [isShareModalVisible, setShareModalVisible] = useState(false);

  const toggleShareModal = () => {
    setShareModalVisible(!isShareModalVisible);
  };

  return (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image
          source={{uri: post.userProfileImage}}
          style={styles.profileImage}
        />
        <Text style={styles.postUserName}>{post.userName}</Text>
      </View>

      {/* Post Content */}
      <Text style={styles.postContent}>{post.content}</Text>

      {/* Post Image */}
      {post.image && (
        <Image source={{uri: post.image}} style={styles.postImage} />
      )}

      {/* Post Footer (e.g., Like, Comment, Share buttons) */}
      <View style={styles.postFooter}>
        <TouchableOpacity
          onPress={handleLikePress}
          style={styles.iconContainer}>
          <Image
            source={{uri: iconUrl || reactionIcons[0]}}
            style={styles.icon}
          />
          <Text style={styles.postButtonText}>
            {selectedReaction || 'Like'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={toggleCommentModal}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/speech-bubble--v1.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.postButtonText}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={toggleShareModal}>
          <Image
            source={{
              uri: 'https://img.icons8.com/sf-ultralight/25/forward-arrow.png',
            }}
            style={styles.icon}
          />
          <Text style={styles.postButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
      {/* Comment Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isCommentModalVisible}
        onRequestClose={toggleCommentModal}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleCommentModal}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/50/000000/left-filled.png',
                }}
                style={styles.modalIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>Comments</Text>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/50/000000/share-rounded-filled.png',
                }}
                style={styles.modalIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Comment List */}
          <ScrollView style={styles.commentList}>
            {/* Render comments here */}
            <Text>User1: Great post!</Text>
            <Text>User2: Amazing!</Text>
            {/* ... */}
          </ScrollView>

          {/* Add Comment */}
          <View style={styles.addCommentContainer}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/user-male-circle.png',
              }}
              style={styles.commenterAvatar}
            />
            <TextInput
              placeholder="Write a comment..."
              style={styles.commentInput}
              multiline={true}
            />
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/50/000000/telegram-app.png',
                }}
                style={styles.sendIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Share Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isShareModalVisible}
        onRequestClose={toggleShareModal}>
        <View style={styles.shareModalContainer}>
          {/* Header */}
          <View style={styles.sharemodalHeader}>
            <TouchableOpacity onPress={toggleShareModal}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/sf-regular/48/horizontal-line.png',
                }}
                style={styles.sharemodalIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Share Options */}
          <ScrollView
            style={styles.shareOptionsContainer}
            onScroll={({nativeEvent}) => {
              const {contentOffset, layoutMeasurement} = nativeEvent;
              const isScrollingUp = contentOffset.y < this.scrollOffset;

              // Check if close to the bottom and scrolling down
              const isCloseToBottom =
                layoutMeasurement.height + contentOffset.y >=
                  nativeEvent.contentSize.height - 20 && !isScrollingUp;

              // Adjust the threshold as needed
              if (isCloseToBottom) {
                // Close the modal when scrolled to the bottom and scrolling down
                toggleShareModal();
              }

              // Update the scrollOffset
              this.scrollOffset = contentOffset.y;
            }}
            scrollEventThrottle={16} // Adjust the throttle value as needed
          >
            <View style={styles.profileContainer}>
              <View style={styles.shareOption}>
                <Image
                  source={{
                    uri: 'https://watermark.lovepik.com/photo/20211201/large/lovepik-forest-girl-back-view-picture_501359035.jpg',
                  }}
                  style={styles.shareOptionIcon}
                />
                <View>
                  <Text style={styles.shareOptionText}>Peach Mtk</Text>
                  <View style={styles.detailsButtonsRow}>
                    <TouchableOpacity
                      style={[
                        styles.detailsButton,
                        {marginRight: 5, width: 50, height: 25},
                      ]} // Adjust width and height values
                      onPress={() => console.log('Feed pressed')}>
                      <Text style={[styles.detailsButtonText, {fontSize: 14}]}>
                        Feed
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.detailsButton,
                        {marginLeft: 5, width: 50, height: 25},
                      ]} // Adjust width and height values
                      onPress={() => console.log('Public pressed')}>
                      <Text style={[styles.detailsButtonText, {fontSize: 14}]}>
                        Public
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Text style={styles.sayText}>Say something about this...</Text>

              <TouchableOpacity
                style={[
                  styles.detailsButton,
                  {marginLeft: 260, width: 100, height: 25},
                ]} // Adjust width and height values
                onPress={() => console.log('share pressed')}>
                <Text style={[styles.detailsButtonText, {fontSize: 14}]}>
                  Share Now
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/ios/50/open-book--v1.png',
                }}
              />
              <Text style={styles.finalText}>Share to your story</Text>
            </View>
            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/sf-regular/48/iphone.png',
                }}
              />
              <Text style={styles.finalText}>Send in Text</Text>
            </View>
            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/ios/50/whatsapp--v1.png',
                }}
              />
              <Text style={styles.finalText}>Send in WhatsApp</Text>
            </View>
            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/ios/50/groups.png',
                }}
              />
              <Text style={styles.finalText}>Share to a group</Text>
            </View>
            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/ios-glyphs/30/link.png',
                }}
              />
              <Text style={styles.finalText}>Copy Link</Text>
            </View>
            <View style={styles.sharebox}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/fluency-systems-regular/48/share.png',
                }}
              />
              <Text style={styles.finalText}>More options</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [myDayStories, setMyDayStories] = useState([]);

  const handleHeaderPress = () => {
    // Handle the header press, e.g., navigate to the user's profile screen
    console.log('Header pressed');
  };

  const handleSearchPress = () => {
    // Handle the search button press, e.g., navigate to a search screen
    console.log('Search button pressed');
  };

  const handlePhotoUploadPress = () => {
    // Handle the photo upload button press
    console.log('Photo upload button pressed');
  };

  const handleStoryPress = story => {
    // Handle the My Day story press
    console.log('Story pressed:', story);
  };

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
      {
        id: 9,
        userName: 'BookWorm',
        userProfileImage:
          'https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg',
        content:
          "Dive into a good book and escape reality. 📚 Currently reading '[Book Title]' by [Author]. The plot twists are keeping me hooked! Any book recommendations? #BookLover",
      },
      {
        id: 10,
        userName: 'TravelDreamer',
        userProfileImage:
          'https://i.pinimg.com/550x/70/79/a6/7079a6498a01e68e75ec0b8476caead1.jpg',
        content:
          "Wanderlust alert! ✈️ Explored the charming streets of [City Name]. From historic landmarks to local markets, every corner had a story to tell. Can't wait for the next adventure! #TravelDiaries",
        image:
          'https://media1.popsugar-assets.com/files/thumbor/uf_lnllMspAA3dUoApLHV1pco78=/fit-in/550x550/filters:format_auto():upscale()/2013/09/04/073/n/1922441/fcae5df5ab359e8d_travel-photo-checklist.jpg',
      },
      {
        id: 11,
        userName: 'BookWorm',
        userProfileImage:
          'https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg',
        content:
          "Dive into a good book and escape reality. 📚 Currently reading '[Book Title]' by [Author]. The plot twists are keeping me hooked! Any book recommendations? #BookLover",
      },
      {
        id: 12,
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

    // Fetch MyDay stories
    fetchMyDayStories();
  }, []);

  const fetchMyDayStories = () => {
    setMyDayStories([
      {
        id: 1,
        user: 'User1',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU',
      },
      {
        id: 2,
        user: 'User2',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkHN2H8rQ-yzOXI1D247WZ4d5KVoNjWtWd_iRx4yNLCF3K0_HKHehew1RuA3cDhdJrKM&usqp=CAU',
      },
      {
        id: 3,
        user: 'User3',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVe4y8K-4vm6TMuM8cZEdSaefLvp2qxQd8CVfXyIjHJW-_Ydk5T873X5NbvLi5bgfiTo&usqp=CAU',
      },
      {
        id: 4,
        user: 'User4',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJynAbLgDsUvQpNkSOVmdtCzgGFbZgb_RWMeZ1dtyBssSzc2poVC0OvcWY_mUdmdy65A8&usqp=CAU',
      },
      {
        id: 5,
        user: 'User5',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgiaOO0t_CroYVP8utMo9K1-EocFlUDqw1ndwJMFp7wPYKnNs5JaNvKaX8ovWHE673Rw&usqp=CAU',
      },
      {
        id: 6,
        user: 'User6',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd03z5CuWY5o2XS2PDY7dvpNNfzmUz_o9nntzzwc1E-i1PaEvU8bq8TSPYzfLmtHuCkN8&usqp=CAU',
      },
      {
        id: 7,
        user: 'User7',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd03z5CuWY5o2XS2PDY7dvpNNfzmUz_o9nntzzwc1E-i1PaEvU8bq8TSPYzfLmtHuCkN8&usqp=CAU',
      },
      {
        id: 8,
        user: 'User8',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkHN2H8rQ-yzOXI1D247WZ4d5KVoNjWtWd_iRx4yNLCF3K0_HKHehew1RuA3cDhdJrKM&usqp=CAU',
      },
      {
        id: 9,
        user: 'User9',
        storyImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVe4y8K-4vm6TMuM8cZEdSaefLvp2qxQd8CVfXyIjHJW-_Ydk5T873X5NbvLi5bgfiTo&usqp=CAU',
      },
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <TouchableOpacity onPress={handleHeaderPress}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://img.icons8.com/dusk/64/circled-user-female-skin-type-7.png',
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={handleSearchPress}>
            <View style={styles.searchBox}>
              <Text style={styles.statusUpdateText}>What's on your mind?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePhotoUploadPress}>
            <Image
              source={{
                uri: 'https://img.icons8.com/fluency/48/stack-of-photos.png',
              }}
              style={styles.photoImage}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Stories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}>
        {/* My Day Stories */}
        {myDayStories.map(story => (
          <TouchableOpacity
            key={story.id}
            onPress={() => handleStoryPress(story)}>
            <View style={styles.storyItem}>
              <Image
                source={{uri: story.storyImage}}
                style={styles.storyImage}
              />
              <Text style={styles.storyUser}>{story.user}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Feed Items (Posts) */}
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  searchBox: {
    height: 40,
    flexDirection: 'column',
    backgroundColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 65,
    justifyContent: 'center',
  },
  statusUpdateText: {
    color: 'gray',
  },
  photoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  storiesContainer: {
    marginTop: 10,
    paddingVertical: 5,
    marginLeft: 5,
  },
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyUser: {
    marginTop: 5,
  },
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
  postUserName: {
    marginLeft: 10,
    fontWeight: 'bold',
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
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  postButton: {
    color: 'blue',
  },
  icon: {
    width: 24,
    height: 24,
    // Other styles for the icons
  },
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postButtonText: {
    marginLeft: 5, // Adjust the spacing between icon and text as needed
    color: 'blue',
  },

  feedItemText: {
    flex: 1,
  },
  commentModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  modalIcon: {
    width: 24,
    height: 24,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentList: {
    flex: 1,
    padding: 10,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  commenterAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  commentInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 8,
    marginRight: 10,
  },
  sendIcon: {
    width: 30,
    height: 30,
  },
  shareModalContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  sharemodalHeader: {
    flexDirection: 'row',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    padding: 5,
  },
  sharemodalIcon: {
    width: 24,
    height: 24,
    marginLeft: 'auto',
  },
  shareOptionsContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  profileContainer: {
    borderColor: '#EEEEEE', // Choose your border color
    borderWidth: 3, // Choose your border width
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  shareOptionIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },

  closeButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  detailsButtonContainer: {
    flex: 1,
    flexDirection: 'row', // Align buttons in a row
    alignItems: 'center', // Align items in the center
    borderRadius: 5,
    borderColor: '#D8D9DA', // Border color
    backgroundColor: '#D8D9DA', // Background color
    paddingVertical: 3, // Adjust vertical padding
    paddingHorizontal: 8, // Adjust horizontal padding
    marginVertical: 5, // Add margin to separate from other components
  },
  detailsButtonsRow: {
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 5,
  },

  detailsButton: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 2, // Adjust margin between buttons
  },
  sayText: {
    marginLeft: 10,
    fontSize: 16,
  },
  sendText: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  addIcon: {
    width: 24, // Adjust width
    height: 24, // Adjust height
    margin: 6,
  },
  sharebox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  finalText: {
    textAlign: 'center',
  },
});

export default HomeScreen;
