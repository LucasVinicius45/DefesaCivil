import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { updateLastEvent } from '../services/eventService';

export default function DamagesScreen({ navigation }) {
  const [damages, setDamages] = useState('');

  const saveDamages = async () => {
    if (!damages) {
      Alert.alert('Erro', 'Por favor, informe o prejuízo.');
      return;
    }
    const success = await updateLastEvent({ damages });
    if (success) {
      Alert.alert('Sucesso', 'Prejuízo registrado!');
    } else {
      Alert.alert('Erro', 'Nenhum evento encontrado para atualizar.');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Descreva os prejuízos causados"
        value={damages}
        onChangeText={setDamages}
        style={styles.input}
      />
      <Button title="Salvar" onPress={saveDamages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
