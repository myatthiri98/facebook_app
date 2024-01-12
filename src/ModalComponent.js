// // ModalComponent.js
// import React from 'react';
// import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';

// const ModalComponent = ({ isVisible, onBackdropPress, children }) => {
//   return (
//     <Modal
//       isVisible={isVisible}
//       onBackdropPress={onBackdropPress}
//       backdropOpacity={0.5}
//     >
//       <View style={styles.modalContent}>
//         {children}
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 22,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     elevation: 5,
//   },
// });

// export default ModalComponent;
