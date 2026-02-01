import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function About(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Ahmed</Text>
      <Text style={styles.paragraph}>I build interactive mobile experiences and prototypes. Below is a short bio and the technologies I use.</Text>

      <Text style={styles.subtitle}>Bio</Text>
      <Text style={styles.paragraph}>I enjoy turning designs into polished UI and exploring animations and friendly interactions. I frequently use React Native, Expo, and modern JavaScript.</Text>

      <Text style={styles.subtitle}>Skills</Text>
      <Text style={styles.paragraph}>• React & React Native
• Expo
• UI/UX & Prototyping
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
