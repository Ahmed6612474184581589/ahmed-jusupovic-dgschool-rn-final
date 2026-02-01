
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import About from './src/screens/About';

export default function App(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Ahmed Jusupovic (WIP)</Text>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navBtn}><Text style={styles.navTxt}>Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}><Text style={styles.navTxt}>About</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}><Text style={styles.navTxt}>Contact</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.hero}>
        <View>
          <Text style={styles.heroTitle}>Interactive Portfolio</Text>
          <Text style={styles.heroSub}>Aplikacija nije završena al bit će</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured projects</Text>
        <View style={styles.placeholderBox}><Text>uskoro će doć</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills & Tools</Text>
        <View style={styles.placeholderBox}><Text>• React Native\n• ...</Text></View>
      </View>
      
      <View style={styles.footer}>
        <Text style={{color:'#bbb'}}>© ovo footer</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ 
    paddingBottom:40, 
    backgroundColor:'#f5fbff' 
  },
  header:{ 
    paddingTop:48, 
    paddingHorizontal:16, 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between' 
  },
  brand:{ 
    fontSize:20, 
    fontWeight:'800',
    color:'#0b7fa6' 
  },
  nav:{ 
    flexDirection:'row', 
    alignItems:'center' 
  },
  navBtn:{ 
    marginLeft:10, 
    padding:8, 
    backgroundColor:'#0b7fa6', 
    borderRadius:6 
  },
  navTxt:{ 
    color:'#fff', 
    fontWeight:'700' 
  },
  hero:{ 
    margin:16, 
    backgroundColor:'#fff', 
    borderRadius:12, 
    padding:16 },
  heroTitle:{ 
    fontSize:22, 
    fontWeight:'800' 
  },
  heroSub:{ 
    color:'#555' 
  },
  section:{ 
    marginHorizontal:12, 
    marginTop:8 
  },
  sectionTitle:{ 
    fontSize:18, 
    fontWeight:'800', 
    marginBottom:8 
  },
  placeholderBox:{ 
    padding:12, 
    backgroundColor:'#fff', 
    borderRadius:8 
  },
  footer:{ 
    marginTop:18, 
    alignItems:'center', 
    padding:16 
  }
});
