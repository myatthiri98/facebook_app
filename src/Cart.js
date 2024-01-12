// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';

// const Cart = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Define the actual API endpoint for your Firebase Realtime Database
//     const apiUrl = 'https://console.firebase.google.com/u/0/project/shopping-28c10/database/shopping-28c10-default-rtdb/data/~2F';
//     axios.get(apiUrl)
//       .then(response => {
//         // Handle the successful response here
//         setData(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Handle errors here
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <View>
//       <Text>Cart</Text>
//       {data && (
//         <View>
//           <Text>Data from API:</Text>
//           <Text>{JSON.stringify(data, null, 2)}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// export default Cart;

// const styles = StyleSheet.create({});
