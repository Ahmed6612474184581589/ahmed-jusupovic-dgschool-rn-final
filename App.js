import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from './screens/About.js';
import Contact from './screens/Contact.js';
import Settings from './screens/Settings.js';
import ProjectDetail from './screens/ProjectDetail.js';
import productsData from './data/product.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function Landing({ navigation }) {
  const featured = (productsData && productsData.popularproducts) ? productsData.popularproducts.slice(0,6) : [];

  const renderProject = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProjectDetail', { project: item })}>
      {item.image ? <Image source={{uri: item.image}} style={styles.cardImage} /> : <View style={styles.cardImagePlaceholder}><Text>IMG</Text></View>}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardCategory}>{item.category}</Text>
        <Text numberOfLines={2} style={styles.cardDesc}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Ahmed</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={styles.navBtn}><Text style={styles.navTxt}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.navBtn}><Text style={styles.navTxt}>About</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.navBtn}><Text style={styles.navTxt}>Contact</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>Interactive Portfolio</Text>
          <Text style={styles.heroSub}>Welcome — browse projects, learn about my work, and contact me.</Text>
          <View style={{flexDirection:'row', marginTop:12}}>
            <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate('About')}><Text style={styles.ctaText}>About me</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.cta, {backgroundColor:'#fff', marginLeft:8}]} onPress={() => navigation.navigate('Contact')}><Text style={[styles.ctaText,{color:'#0b7fa6'}]}>Contact</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.heroImage}>
          <View style={styles.logoPlaceholder}><Text style={{color:'#0b7fa6', fontWeight:'700'}}>AJ</Text></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured projects</Text>
        <FlatList data={featured} keyExtractor={(i)=>String(i.id)} renderItem={renderProject} contentContainerStyle={{paddingVertical:6}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills & Tools</Text>
        <View style={styles.toolsRow}>
          <View style={styles.tool}><MaterialCommunityIcons name="react" size={28} color="#22d4ff"/><Text style={styles.toolTxt}>React Native</Text></View>
          <View style={styles.tool}><MaterialCommunityIcons name="code-tags" size={28} /><Text style={styles.toolTxt}>JS / JSX</Text></View>
          <View style={styles.tool}><MaterialCommunityIcons name="palette" size={28} /><Text style={styles.toolTxt}>UI/UX</Text></View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{color:'#bbb'}}>© Ahmed Jusupović — Interactive Portfolio 2026</Text>
      </View>
    </ScrollView>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingBottom: 40,
    backgroundColor: '#f5fbff',
  },
  header:{
    paddingTop: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand:{
    fontSize: 20,
    fontWeight: '800',
    color: '#0b7fa6',
  },
  nav:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBtn:{
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#0b7fa6',
    borderRadius: 6,
  },
  navTxt:{
    color: '#fff',
    fontWeight: '700',
  },
  navIcon:{
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#0b7fa6',
    borderRadius: 8,
  },
  hero:{
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroText:{
    flex: 1,
  },
  heroTitle:{
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  heroSub:{
    color: '#555',
  },
  heroImage:{
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder:{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#0b7fa6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section:{
    marginHorizontal: 12,
    marginTop: 8,
  },
  sectionTitle:{
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  card:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  cardImage:{
    width: 84,
    height: 84,
    borderRadius: 8,
    marginRight: 12,
  },
  cardImagePlaceholder:{
    width: 84,
    height: 84,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eef7fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody:{
    flex: 1,
  },
  cardTitle:{
    fontWeight: '800',
  },
  cardCategory:{
    color: '#666',
    marginTop: 4,
  },
  cardDesc:{
    color: '#333',
    marginTop: 6,
  },
  toolsRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tool:{
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  toolTxt:{
    marginTop: 6,
    fontWeight: '600',
  },
  footer:{
    marginTop: 18,
    alignItems: 'center',
    padding: 16,
  },
});
