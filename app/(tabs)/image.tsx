// import { useEffect, useState } from 'react';
// import { Button, Image, View, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Linking from 'expo-linking'

// export default function ImagePickerExample() {
//     const [image, setImage] = useState(null);
//     const response: any = ImagePicker.useMediaLibraryPermissions()
//     console.log({ response: response[0] })

//     useEffect(() => {
//         if (response[0]?.status == 'granted') return;
//         const permi = ImagePicker.requestCameraPermissionsAsync()
//         console.log({ permi })
//     }, [response])

//     const pickImage = async () => {
//         const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         console.log({ perm })

//         if (perm.status != ImagePicker.PermissionStatus.GRANTED) {
//             console.log("denied")
//             Alert.alert('Permission Required!', 'Please provide permission', [
//                 {
//                     text: 'Cancel',
//                     onPress: () => console.log('Cancel Pressed'),
//                     style: 'cancel',
//                 },
//                 { text: 'Settings', onPress: () => Linking.openSettings() },
//             ]);
//             return;
//             // await ImagePicker.getMediaLibraryPermissionsAsync(true);
//         }

//         // No permissions request is necessary for launching the image library
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.canceled) {
//             setImage(result.assets[0].uri);
//         }

//     };

//     return (
//         <View style={styles.container}>
//             <Button title="Pick an image from camera roll" onPress={pickImage} />
//             {image && <Image source={{ uri: image }} style={styles.image} />}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         width: 200,
//         height: 200,
//     },
// });
