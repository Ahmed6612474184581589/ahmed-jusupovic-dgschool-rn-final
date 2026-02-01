import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function About(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Ahmed</Text>
      <Text style={styles.paragraph}>Izrađujem interaktivna mobilna iskustva i prototipove. U nastavku slijedi kratka biografija i tehnologije koje koristim.</Text>

      <Text style={styles.subtitle}>Bio</Text>
      <Text style={styles.paragraph}>Uživam pretvarajući dizajne u uglađeni korisnički interfejs i istražujući animacije i prijateljske interakcije. Često koristim React Native, Expo i moderni JavaScript.</Text>

      <Text style={styles.subtitle}>Skills</Text>
      <Text style={styles.paragraph}>• React & React Native \n
• Expo \n
• UI/UX & Prototyping \n
• State management</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 16,
  },
  title:{
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  paragraph:{
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  subtitle:{
    fontWeight: '800',
    marginTop: 8,
  },
});
