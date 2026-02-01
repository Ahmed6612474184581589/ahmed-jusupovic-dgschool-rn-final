import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProjectDetail({ route, navigation }) {
  const project = route.params?.project || { name: 'Unknown', description: 'No description', image:'', category:'' };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color:'#0b7fa6'}}>← Back</Text></TouchableOpacity>
      <Text style={styles.title}>{project.name}</Text>
      <Text style={styles.cat}>{project.category}</Text>
      <Text style={styles.paragraph}>{project.description}</Text>

      <Text style={styles.sectionTitle}>What I did</Text>
      <Text style={styles.paragraph}>• Implementirane UI komponente, navigacija i tokovi podataka. \n
• Fokusirano na pristupačne mete dodira i čist raspored.</Text>
      <Text style={styles.sectionTitle}>Sljedeći koraci</Text>
      <Text style={styles.paragraph}>Dodaj screenshot-e i repo linkove</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 16,
    backgroundColor: '#f5fbff',
  },
  title:{
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
  },
  cat:{
    color: '#666',
    marginTop: 6,
  },
  paragraph:{
    marginTop: 12,
    lineHeight: 20,
  },
  sectionTitle:{
    fontWeight: '800',
    marginTop: 10,
  },
});
