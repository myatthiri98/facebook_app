import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, FlatList } from 'react-native';

const CommentsModal = ({ isVisible, onClose, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    onAddComment(newComment);
    setNewComment('');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 16, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Comments</Text>
          
          {/* Display existing comments */}
          <FlatList
            data={comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <Text>{item}</Text>
              </View>
            )}
          />

          {/* Add a new comment */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <TextInput
              placeholder="Write a comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
              style={{ flex: 1, marginRight: 10, padding: 8, borderWidth: 1, borderRadius: 8 }}
            />
            <Button title="Post" onPress={addComment} />
          </View>

          <Button title="Close" onPress={onClose} style={{ marginTop: 10 }} />
        </View>
      </View>
    </Modal>
  );
};

export default CommentsModal;
