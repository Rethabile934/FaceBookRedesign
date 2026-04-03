import React from 'react';
import { View, FlatList, StyleSheet, RefreshControl, SafeAreaView, StatusBar } from 'react-native';
import StoriesSection from '../components/StoriesSection';
import PostCard from '../components/PostCard';

const image1 = require('../assets/images/20260111_142459.jpg');
const image2 = require('../assets/images/screen.jpg');
const image3 = require('../assets/images/20260111_144739.jpg');
const image4 = require('../assets/images/screnn.jpg');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const posts = [
    {
      id: '1',
      name: 'John',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg', 
      content: 'Beautiful day!',
      image: image1,
      likes: 1247,
      comments: 89,
      time: '2 hours ago',
    },
    {
      id: '2',
      name: 'Anna',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      content: 'And without being judged',
      image: image2, 
      likes: 843,
      comments: 56,
      time: '5 hours ago',
    },
    {
      id: '3',
      name: 'Sophia',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      content: 'Special Occasions',
      image: image3, 
      likes: 562,
      comments: 34,
      time: '1 day ago',
    },
    {
      id: '4',
      name: 'James',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      content: 'Life is so difficult that even little thing can now bring peace',
      image: image4, 
      likes: 2105,
      comments: 178,
      time: '2 days ago',
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F2F5" />
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={StoriesSection}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#1877F2']} />
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
});

export default HomeScreen;