import { TabView, TabBar } from 'react-native-tab-view';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ForYouScreen = () => (
  <View style={styles.container}>
    {/* Content for For You tab */}
    <Text>For You Content</Text>
  </View>
);

const LiveScreen = () => (
  <View style={styles.container}>
    {/* Content for Live tab */}
    <Text>Live Content</Text>
  </View>
);

const GamingScreen = () => (
  <View style={styles.container}>
    {/* Content for Gaming tab */}
    <Text>Gaming Content</Text>
  </View>
);

const FollowingScreen = () => (
  <View style={styles.container}>
    {/* Content for Following tab */}
    <Text>Following Content</Text>
  </View>
);

const TabNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'forYou', title: 'For You' },
    { key: 'live', title: 'Live' },
    { key: 'gaming', title: 'Gaming' },
    { key: 'following', title: 'Following' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'forYou':
        return <ForYouScreen />;
      case 'live':
        return <LiveScreen />;
      case 'gaming':
        return <GamingScreen />;
      case 'following':
        return <FollowingScreen />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <View style={styles.tabsContainer}>
      {props.navigationState.routes.map((route, i) => (
        <TouchableOpacity
          key={route.key}
          style={[
            styles.tab,
            index === i ? styles.activeTab : null,
          ]}
          onPress={() => setIndex(i)}
        >
          <Text style={[styles.tabText, index === i ? styles.activeTabText : null]}>
            {route.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    margin: 5,
  },
  tabText: {
    fontSize: 12,
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

export default TabNav;
