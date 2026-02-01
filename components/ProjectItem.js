import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectItem(){ 
  return (
    <View style={styles.box}><Text>ProjectItem component - TODO</Text></View>
  );
}

const styles = StyleSheet.create({
  box:{ padding:12, backgroundColor:'#fff', borderRadius:8 }
});
