import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [count, setCount] = useState(0);

  const onChangeText = (text) => {
    setText(text);
  };

  const onChangeNumber = (number) => {
    setNumber(number);
  };

  const onPress = () => {
    setShowAlert(true);
  };

  const onCountPress = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (showAlert) {
      Alert.alert('Login feito com sucesso');
      setShowAlert(false);
    }
  }, [showAlert]);

  

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/120px-CRVascodaGama.png' }}
      />
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.boldText}>Faça seu login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite seu nome"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite sua senha"
          placeholderTextColor="#888"
          keyboardType="numeric"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <View style={styles.buttonContent}>
            <Feather name="send" size={24} color="white" />
            <Text style={styles.buttonText}> Enviar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCountPress}>
          <Text style={styles.buttonText}>Cliquei {count} vezes</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 16,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});

// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function App() {
//   const [facing, setFacing] = useState('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });


// import { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });
