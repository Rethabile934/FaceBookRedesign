import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Import local images from assets/images folder
const yourStoryImage = require('../assets/images/20260111_142459.jpg');
const RethabileImage = require('../assets/images/20260111_142459.jpg');
const KatisoImage = require('../assets/images/screen.jpg');
const BoitumeloImage = require('../assets/images/20260111_144739.jpg');
const ReatileImage = require('../assets/images/screnn.jpg');
const LineoImage = require('../assets/images/screens.jpg');

const StoriesSection = () => {
  const stories = [
    { 
      id: '1', 
      name: 'Your Story', 
      image: yourStoryImage, 
      isAdd: true 
    },
    { 
      id: '2', 
      name: 'Rethabile Khosi', 
      image: RethabileImage 
    },
    { 
      id: '3', 
      name: 'Katiso Khosi', 
      image: KatisoImage 
    },
    { 
      id: '4', 
      name: 'Boitumelo Khosi', 
      image: BoitumeloImage 
    },
    { 
      id: '5', 
      name: 'Reatile Khosi', 
      image: ReatileImage 
    },
    { 
      id: '6', 
      name: 'Lineo Monyane', 
      image: LineoImage 
    },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {stories.map((story) => (
        <TouchableOpacity key={story.id} style={styles.storyItem}>
          <View style={styles.storyImageContainer}>
            <Image source={story.image} style={styles.storyImage} />
            {story.isAdd && (
              <View style={styles.addIcon}>
                <Text style={styles.addIconText}>+</Text>
              </View>
            )}
          </View>
          <Text style={styles.storyUsername} numberOfLines={1}>
            {story.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  storyImageContainer: {
    position: 'relative',
  },
  storyImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#1877F2',
  },
  addIcon: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    backgroundColor: '#1877F2',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addIconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storyUsername: {
    fontSize: 11,
    color: '#050505',
    marginTop: 6,
    maxWidth: 72,
    textAlign: 'center',
  },
});

export default StoriesSection;