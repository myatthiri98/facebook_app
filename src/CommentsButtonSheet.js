import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { BottomSheet } from '@gorhom/bottom-sheet';

const CommentsBottomSheet = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const bottomSheetRef = React.createRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };

  const addComment = () => {
    // Add your logic to handle adding a new comment to the list
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const renderContent = () => (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Comments</Text>
      {comments.map((comment, index) => (
        <Text key={index}>{comment}</Text>
      ))}
      <TextInput
        placeholder="Add a comment"
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
        style={{ marginTop: 10, marginBottom: 10, padding: 8, borderWidth: 1 }}
      />
      <Button title="Post Comment" onPress={addComment} />
    </View>
  );

  return (
    <>
      <Button title="Open Comments" onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['25%', '50%', '75%']}
        enableContentTap
        renderContent={renderContent}
      />
    </>
  );
};

export default CommentsBottomSheet;
