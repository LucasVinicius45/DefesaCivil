import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function EventCard({ event, index, onEdit, onRemove }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📍 {event.location}</Text>
      <Text>🕒 {event.interruptionTime}</Text>
      <Text>⚠️ {event.damages}</Text>

      <View style={styles.actions}>
        <Button title="Editar" onPress={() => onEdit(index)} />
        <Button title="Remover" color="red" onPress={() => onRemove(index)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
