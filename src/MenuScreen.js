import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
// import Cart from './Cart';

const MenuScreen = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [myDayStories, setMyDayStories] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isHelpCenterVisible, setHelpCenterVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [isAccessVisible, setAccessVisible] = useState(false);
  const [isAlsoVisible, setAlsoVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6O_e0IYRbFPG28Q34IWZ-kSkQVg6RHACRw&usqp=CAU',
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

  useEffect(() => {
    // Fetch MyDay stories
    fetchMyDayStories();
  }, []);

  return (
    // <Cart/>

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Menu</Text>

          <TouchableOpacity onPress={() => console.log('Setting icon pressed')}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/settings.png',
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
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image
              style={styles.userImage}
              source={{
                uri: 'https://watermark.lovepik.com/photo/20211201/large/lovepik-forest-girl-back-view-picture_501359035.jpg',
              }}
            />
            <Text style={styles.userName}>Myat Thiri</Text>
            <View style={styles.rightContainer}>
              <TouchableOpacity onPress={toggleBottomSheet}>
                <Image
                  style={styles.downArrow}
                  source={{
                    uri: 'https://img.icons8.com/ios/50/expand-arrow--v2.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.newProfile}>
            <Image
              style={styles.addIcon}
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/30/add--v1.png',
              }}
            />
            <Text>Create new profile</Text>
          </View>
        </View>

        <Text style={styles.shortcut}>Your shortcuts</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}>
          {/* My Day Stories */}
          {myDayStories.map(story => (
            <TouchableOpacity
              key={story.id}
              onPress={() => console.log('Story pressed:', story)}>
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
        <Text style={styles.shortcut}>All shortcuts</Text>
        <View style={styles.shortcutContainer}>
          <View style={styles.shortcutRow}>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/dusk/64/bookmark-ribbon.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-color-outline-adri-ansyah/64/external-memories-social-media-interface-color-outline-adri-ansyah.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Memories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/color/48/circled-play--v1.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-friends-ui-basic-anggara-flat-anggara-putra.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/dusk/64/activity-feed.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Feeds</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/dusk/64/event-accepted.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-group-100-most-used-icons-flaticons-lineal-color-flat-icons.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shortcutItem}
              onPress={() => console.log('Saved icon pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-jumpicon-duo-ayub-irawan/32/external-Global-Crisis-market-economy-jumpicon-(duo)-jumpicon-duo-ayub-irawan-2.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Crisis Response</Text>
            </TouchableOpacity>
            {showMore && (
              <>
                <TouchableOpacity
                  style={styles.shortcutItem}
                  onPress={() => console.log('Saved icon pressed')}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/dusk/64/circled-user-female-skin-type-1-2.png',
                    }}
                    style={styles.iconShortcut}
                  />
                  <Text style={styles.shortcut}>Avatars</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shortcutItem}
                  onPress={() => console.log('Saved icon pressed')}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/arcade/64/controller.png',
                    }}
                    style={styles.iconShortcut}
                  />
                  <Text style={styles.shortcut}>Fantasy games</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shortcutItem}
                  onPress={() => console.log('Saved icon pressed')}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/arcade/64/controller.png',
                    }}
                    style={styles.iconShortcut}
                  />
                  <Text style={styles.shortcut}>Gaming</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shortcutItem}
                  onPress={() => console.log('Saved icon pressed')}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/color-glass/48/facebook-messenger.png',
                    }}
                    style={styles.iconShortcut}
                  />
                  <Text style={styles.shortcut}>Messenger Kids</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shortcutItem}
                  onPress={() => console.log('Saved icon pressed')}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-flag-infographic-elements-vitaliy-gorbachev-flat-vitaly-gorbachev.png',
                    }}
                    style={styles.iconShortcut}
                  />
                  <Text style={styles.shortcut}>Pages</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          <TouchableOpacity
            style={styles.detailsButtonContainer}
            onPress={() => setShowMore(!showMore)}>
            <Text style={styles.editDetails}>
              {showMore ? 'See Less' : 'See More'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.helpSupportContainer}>
          <Image
            style={styles.addIcon}
            source={{
              uri: 'https://img.icons8.com/ultraviolet/40/help.png',
            }}
          />
          <Text style={styles.finalText}>Help & support</Text>
          <TouchableOpacity
            onPress={() => setHelpCenterVisible(!isHelpCenterVisible)}>
            <Image
              style={styles.arrow}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png',
              }}
            />
          </TouchableOpacity>
        </View>

        {isHelpCenterVisible && (
          <>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/nolan/64/centre-of-gravity.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Help Center</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/pastel-glyph/64/full-inbox--v2.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Support Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/office/16/low-risk.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Report a problem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/50/security-checked.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/3d-fluency/94/book.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Terms & Policies </Text>
            </TouchableOpacity>
          </>
        )}

        <View style={styles.helpSupportContainer}>
          <Image
            style={styles.addIcon}
            source={{
              uri: 'https://img.icons8.com/fluency/48/settings.png',
            }}
          />
          <Text style={styles.finalText}>Settings & privacy</Text>
          <TouchableOpacity
            onPress={() => setSettingsVisible(!isSettingsVisible)}>
            <Image
              style={styles.arrowkey}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png',
              }}
            />
          </TouchableOpacity>
        </View>

        {isSettingsVisible && (
          <>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Settings pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-setting-user-tanah-basah-glyph-tanah-basah.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Device requests pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-line-icons-royyan-wijaya/64/external-device-smartphone-two-line-icons-royyan-wijaya-6.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Device requests</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/stickers/100/photo-editor.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Recent ad activity</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/pulsar-line/48/purchase-order.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Orders and payments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/sf-black-filled/64/moon-symbol.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Dark Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/pulsar-color/48/language-skill.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Language</Text>
            </TouchableOpacity>
          </>
        )}

        <View style={styles.professionalAccessContainer}>
          <Image
            style={styles.boxImage}
            source={{
              uri: 'https://img.icons8.com/offices/30/user-credentials.png',
            }}
          />
          <Text style={styles.boxText}>Professional access</Text>
          <TouchableOpacity onPress={() => setAccessVisible(!isAccessVisible)}>
            <Image
              style={styles.accesskey}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png',
              }}
            />
          </TouchableOpacity>
        </View>

        {isAccessVisible && (
          <View style={styles.accessContainer}>
            <TouchableOpacity
              onPress={() => console.log('Option 1 pressed')}
              style={styles.accessBox}>
              <Image
                source={{
                  uri: 'https://www.wallpapers13.com/wp-content/uploads/2016/03/Colour-Circle-Background-Wallpaper-Hd.jpg',
                }}
                style={styles.accessImage}
              />
              <Text style={styles.accessTitle}>Public presence</Text>
              <Text style={styles.accessDescription}>
                Get tools to help you grow on Facebook.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log('Option 2 pressed')}
              style={styles.accessBox}>
              <Image
                source={{
                  uri: 'https://i.vimeocdn.com/video/1451300066-cf42ac4206c279fc6689c017a7353e72285dd12b4d98e7a96e10f260ab63e9a7-d_640x360.jpg',
                }}
                style={styles.accessImage}
              />
              <Text style={styles.accessTitle}>Meta Verified</Text>
              <Text style={styles.accessDescription}>
                Subscribe for a verified badge and more.
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.helpSupportContainer}>
          <Image
            style={styles.addIcon}
            source={{
              uri: 'https://img.icons8.com/nolan/64/square-border.png',
            }}
          />
          <Text style={styles.finalText}>Also from Meta</Text>
          <TouchableOpacity onPress={() => setAlsoVisible(!isAlsoVisible)}>
            <Image
              style={styles.arrow}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png',
              }}
            />
          </TouchableOpacity>
        </View>

        {isAlsoVisible && (
          <>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/pulsar-color/48/threads.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>Threads</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.helpCenterItem}
              onPress={() => console.log('Help Center pressed')}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/color/48/whatsapp.png',
                }}
                style={styles.iconShortcut}
              />
              <Text style={styles.shortcut}>WhatsApp</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={styles.detailsButtonContainer}
          onPress={() => console.log('Help Center pressed')}>
          <Text style={styles.editDetails}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isBottomSheetVisible}
        onRequestClose={() => toggleBottomSheet()}>
        <TouchableOpacity
          style={styles.bottomSheetContainer}
          onPress={toggleBottomSheet}
        />
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomProfile}>Your profiles and Pages</Text>
          <TouchableOpacity onPress={toggleBottomSheet}>
            <View style={styles.bottomUserInfo}>
              <Image
                style={styles.userImageBottom}
                source={{
                  uri: 'https://watermark.lovepik.com/photo/20211201/large/lovepik-forest-girl-back-view-picture_501359035.jpg',
                }}
              />
              <Text style={styles.bottomUserName}>Myat Thiri</Text>
              <Image
                style={styles.radioIcon}
                source={{
                  uri: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/external-choice-rounded-ui-elements-flat-icons-inmotus-design.png',
                }}
              />
            </View>

            <View style={styles.bottomActions}>
              <Image
                style={styles.addIcon}
                source={{
                  uri: 'https://img.icons8.com/ios-glyphs/30/add--v1.png',
                }}
              />
              <Text>Create new profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    margin: 5,
  },
  profileContainer: {
    borderColor: '#EEEEEE', // Choose your border color
    borderWidth: 3, // Choose your border width
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#EEEEEE', // Choose your border color
    borderBottomWidth: 2, // Choose your border width
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
    left: 222,
    margin: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
  },
  userName: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 24,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  downArrow: {
    width: 30,
    height: 30,
    backgroundColor: '#D8D9DA',
    borderRadius: 20,
    padding: 20,
  },
  arrow: {
    width: 30,
    height: 30,
    marginLeft: 210,
  },
  arrowkey: {
    width: 30,
    height: 30,
    marginLeft: 189,
  },
  accesskey: {
    width: 30,
    height: 30,
    marginLeft: 159,
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    elevation: 5,
  },
  bottomProfile: {
    textAlign: 'center',
    fontSize: 18, // Adjust font size
    fontWeight: 'bold', // Make it bold
    marginBottom: 15, // Add some bottom margin
  },
  bottomUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Add some bottom margin
  },
  userImageBottom: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10, // Add some right margin
  },
  bottomUserName: {
    marginVertical: 10, // Adjust vertical margin
    fontWeight: 'bold', // Make it bold
    fontSize: 20, // Adjust font size
  },
  radioIcon: {
    width: 24, // Adjust width
    height: 24, // Adjust height
    marginLeft: 150,
  },
  addIcon: {
    width: 24, // Adjust width
    height: 24, // Adjust height
    margin: 6,
  },
  newProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortcut: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
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
  iconShortcut: {
    width: 20,
    height: 20,
  },
  shortcutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 5,
  },
  shortcutItem: {
    width: '48%', // Set the width to 48% to allow space between items
    borderColor: '#EEEEEE',
    borderWidth: 3,
    margin: '1%', // Adjust margin to create space between items
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  helpCenterItem: {
    borderColor: '#EEEEEE',
    borderWidth: 2, // Add or adjust the border width
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  detailsButtonContainer: {
    borderWidth: 1,
    borderColor: '#D8D9DA', // Border color
    borderRadius: 5,
    backgroundColor: '#D8D9DA', // Background color
    padding: 10,
    marginLeft: 7,
    marginRight: 8,
  },
  editDetails: {
    fontSize: 16,
    textAlign: 'center',
  },
  finalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helpSupportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  professionalAccessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  boxImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  boxText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  accessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Adjust as needed
  },
  accessBox: {
    flex: 1,
    margin: 5, // Adjust as needed
  },
  accessImage: {
    width: '100%',
    height: 100, // Set the height as needed
    borderRadius: 10,
  },
  accessTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  accessDescription: {
    marginTop: 5,
    color: '#888888',
  },
});

export default MenuScreen;
