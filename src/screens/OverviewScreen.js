import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TextInput, Modal, Button } from 'react-native';
import { getData } from '../services/storageService';
import { removeEvent, editEvent } from '../services/eventService';
import EventCard from '../components/EventCard';

export default function OverviewScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editLocation, setEditLocation] = useState('');
  const [editTime, setEditTime] = useState('');
  const [editDamages, setEditDamages] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadEvents();
    });
    return unsubscribe;
  }, [navigation]);

  const loadEvents = async () => {
    const data = await getData('events');
    setEvents(data);
  };

 const handleRemove = (index) => {
  console.log('Chamando remoção para índice:', index);
  Alert.alert('Confirmar', 'Deseja remover este evento?', [
    { text: 'Cancelar', style: 'cancel' },
    {
      text: 'Remover',
      style: 'destructive',
      onPress: async () => {
        await removeEvent(index);
        const updated = await getData('events');
        setEvents(updated);
      },
    },
  ]);
};

  const handleEdit = (index) => {
    const event = events[index];
    setEditIndex(index);
    setEditLocation(event.location);
    setEditTime(event.interruptionTime);
    setEditDamages(event.damages);
    setModalVisible(true);
  };

  const saveEdit = async () => {
    await editEvent(editIndex, {
      location: editLocation,
      interruptionTime: editTime,
      damages: editDamages,
    });
    setModalVisible(false);
    loadEvents();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Registrados</Text>
      <FlatList
        data={events}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <EventCard event={item} index={index} onEdit={handleEdit} onRemove={handleRemove} />
        )}
      />

      {/* Modal de Edição */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Local"
            value={editLocation}
            onChangeText={setEditLocation}
            style={styles.input}
          />
          <TextInput
            placeholder="Tempo de interrupção"
            value={editTime}
            onChangeText={setEditTime}
            style={styles.input}
          />
          <TextInput
            placeholder="Prejuízos"
            value={editDamages}
            onChangeText={setEditDamages}
            style={styles.input}
          />
          <Button title="Salvar alterações" onPress={saveEdit} />
          <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Button title="Cadastrar Localização" onPress={() => navigation.navigate('Location')} />
      <Button title="Cadastrar Tempo" onPress={() => navigation.navigate('Interruption Time')} />
      <Button title="Cadastrar Prejuízo" onPress={() => navigation.navigate('Damages')} />
      <Button title="Ver Recomendações" onPress={() => navigation.navigate('Recommendations')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalContent: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
