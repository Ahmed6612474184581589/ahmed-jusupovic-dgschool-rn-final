import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Contact(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.paragraph}>Feel free to reach out for collaborations or questions.</Text>

      <TouchableOpacity style={styles.card} onPress={()=>Linking.openURL('mailto:ahmed@example.com')}>
        <Text style={styles.cardTitle}>Email</Text>
        <Text>ahmed@example.com</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>Linking.openURL('tel:+1234567890')}>
        <Text style={styles.cardTitle}>Phone</Text>
        <Text>+1 234 567 890</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 12,
    color: '#333',
  },
  card:{
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle:{
    fontWeight: '800',
  },
});
