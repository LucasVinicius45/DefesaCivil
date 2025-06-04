import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RecommendationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recomendações:</Text>
      <Text>✅ Mantenha lanternas e baterias extras em casa.</Text>
      <Text>✅ Evite áreas alagadas e locais de risco.</Text>
      <Text>✅ Siga orientações da Defesa Civil.</Text>
      <Text>✅ Em caso de falha prolongada, busque abrigo seguro.</Text>
      <Text>✅ Informe autoridades sobre ocorrências graves.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
});
