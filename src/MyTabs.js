import React, { useRef, useState } from 'react';
import { Text, View, Image , ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import VideoScreen from './VideoScreen';
import FriendsScreen from './FriendsScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import MenuScreen from './MenuScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const tabIcons = {
    Home: { uri: 'https://img.icons8.com/windows/32/home.png' },
    Videos: { uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-video-devices-flatart-icons-outline-flatarticons.png' },
    Friends: { uri: 'https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/external-friend-user-interface-anggara-outline-color-anggara-putra.png' },
    Profile: { uri: 'https://img.icons8.com/windows/32/user-male-circle.png' },
    Notifications: { uri: 'https://img.icons8.com/ios/50/appointment-reminders--v1.png' },
    Menu: { uri: 'https://img.icons8.com/ios-glyphs/30/menu--v3.png' },
  };
  const scrollViewRefs = {
    Home: useRef(null),
    Videos: useRef(null),
    Friends: useRef(null),
    Profile: useRef(null),
    Notifications: useRef(null),
    Menu: useRef(null),
  };

  const [refreshing, setRefreshing] = useState({
    Home: false,
    Videos: false,
    Friends: false,
    Profile: false,
    Notifications: false,
    Menu: false,
  });
  const onRefresh = (tabName) => {
    // Simulate fetching new data
    setRefreshing((prevRefreshing) => ({ ...prevRefreshing, [tabName]: true }));
    setTimeout(() => {
      // Update the data for the specific tab
      // For example, if you have a state for each tab, you can update it here
      setRefreshing((prevRefreshing) => ({ ...prevRefreshing, [tabName]: false }));
    }, 1000);
  };

  const renderTabScreen = (props) => {
    const { route } = props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRefs[route.name]}
          refreshControl={
            <RefreshControl
              refreshing={refreshing[route.name]}
              onRefresh={() => onRefresh(route.name)}
              // Customize the appearance of the RefreshControl
              progressViewOffset={50}
              progressBackgroundColor="#ccc"
              colors={['#4267B2']} // Facebook blue color
              size={ActivityIndicator.sizeLarge}
              style={{ height: 80 }}
            />
          }>
          {/* Your tab content goes here */}
          <Text>{`Tab: ${route.name}`}</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? 'blue' : 'gray';
  
          return (
            <Image
              source={{ uri: tabIcons[route.name].uri }}
              style={{ tintColor: iconColor, width: 24, height: 24 }}
            />
          );
        },
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#ccc' },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      })}
    >
  
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Videos" component={VideoScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
