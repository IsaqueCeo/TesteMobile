import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';

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
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCountPress}>
          <Text style={styles.buttonText}>Cool do Tasso {count}</Text>
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  }
});

