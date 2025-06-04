import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { updateLastEvent } from '../services/eventService';

export default function InterruptionTimeScreen({ navigation }) {
  const [interruptionTime, setInterruptionTime] = useState('');

  const saveInterruptionTime = async () => {
    if (!interruptionTime) {
      Alert.alert('Erro', 'Por favor, informe o tempo.');
      return;
    }
    const success = await updateLastEvent({ interruptionTime });
    if (success) {
      Alert.alert('Sucesso', 'Tempo registrado!');
    } else {
      Alert.alert('Erro', 'Nenhum evento encontrado para atualizar.');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe o tempo de interrupção"
        value={interruptionTime}
        onChangeText={setInterruptionTime}
        style={styles.input}
      />
      <Button title="Salvar" onPress={saveInterruptionTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
