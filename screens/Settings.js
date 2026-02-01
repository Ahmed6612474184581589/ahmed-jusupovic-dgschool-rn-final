import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function Settings(){
  const [dark, setDark] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Postavke</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Tamni način rada</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Obavijesti</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
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
    marginBottom: 12,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    padding: 12,
  },
  label:{
    fontWeight: '700',
  },
});
