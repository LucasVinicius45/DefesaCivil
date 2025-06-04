import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addEvent } from '../services/eventService';

export default function LocationScreen({ navigation }) {
  const [location, setLocation] = useState('');

  const saveLocation = async () => {
    if (!location) {
      Alert.alert('Erro', 'Por favor, informe a localização.');
      return;
    }
    await addEvent({ location, interruptionTime: '', damages: '' });
    Alert.alert('Sucesso', 'Localização registrada!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe a Localização (bairro, cidade ou CEP)"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Salvar" onPress={saveLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
