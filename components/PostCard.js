import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const likePost = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.card}>
      
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

     
      <Text style={styles.content}>{post.content}</Text>
      
      
      {post.image && (
        <TouchableOpacity activeOpacity={0.9}>
          <Image 
            source={post.image}  // This works with require() imports
            style={styles.image} 
          />
        </TouchableOpacity>
      )}

   
      <View style={styles.stats}>
        <View style={styles.statsLeft}>
          <Text style={styles.heartIcon}>❤️</Text>
          <Text style={styles.statsText}>{likes}</Text>
        </View>
        <Text style={styles.statsText}>{post.comments} comments</Text>
      </View>

    
      <View style={styles.actions}>
        <TouchableOpacity 
          onPress={likePost} 
          style={styles.action}
          android_ripple={{ color: '#E4E6EB' }}
        >
          <Text style={styles.actionText}>{liked ? '❤️ Like' : '🤍 Like'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.action}
          android_ripple={{ color: '#E4E6EB' }}
        >
          <Text style={styles.actionText}>💬 Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.action}
          android_ripple={{ color: '#E4E6EB' }}
        >
          <Text style={styles.actionText}>📤 Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#050505',
  },
  time: {
    fontSize: 11,
    color: '#65676B',
    marginTop: 2,
  },
  menuBtn: {
    padding: 5,
  },
  menuIcon: {
    fontSize: 20,
    color: '#65676B',
  },
  content: {
    fontSize: 15,
    paddingHorizontal: 12,
    paddingBottom: 12,
    lineHeight: 20,
    color: '#050505',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E4E6EB',
  },
  statsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  statsText: {
    fontSize: 13,
    color: '#65676B',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  action: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#65676B',
  },
});

export default PostCard;