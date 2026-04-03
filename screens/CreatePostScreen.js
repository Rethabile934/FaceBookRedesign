import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

const CreatePostScreen = () => {
  const [post, setPost] = useState('');

  const handlePost = () => {
    if (post.trim()) {
      Alert.alert('Success', 'Your post has been shared!');
      setPost('');
    } else {
      Alert.alert('Error', 'Please write something');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Post</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          multiline
          value={post}
          onChangeText={setPost}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.photoBtn}>
          <Text>📷 Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
          <Text style={styles.postBtnText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  inputContainer: {
    padding: 15,
  },
  input: {
    fontSize: 18,
    minHeight: 150,
    textAlignVertical: 'top',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  photoBtn: {
    backgroundColor: '#E4E6EB',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  postBtn: {
    backgroundColor: '#1877F2',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  postBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreatePostScreen;