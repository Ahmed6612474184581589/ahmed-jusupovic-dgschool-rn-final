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
      <Text style={styles.paragraph}>• Implemented UI components, navigation and data flows.
• Focused on accessible touch targets and clean layout.</Text>
      <Text style={styles.sectionTitle}>Next steps</Text>
      <Text style={styles.paragraph}>Add screenshots, repo links and a live demo per project.</Text>
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
