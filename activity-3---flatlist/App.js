import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const onPress = () => setCount(prevCount => prevCount + 1);
const MORNING = [
  {
    id: '001',
    title: 'Devotion',
  },
  {
    id: '002',
    title: 'Breakfast',
  },
    {
    id: '003',
    title: 'Skincare',
  },
  {
    id: '004',
    title: 'Cleaning the house.',
  },
  {
    id: '005',
    title: 'Preparing the ingredients I will cook for lunch.',
  },
  {
    id: '006',
    title: 'Cooking for lunch.',
  },
  {
    id: '007',
    title: 'Preparing the Table',
  },
];
const AFTERNOON = [
  {
    id: '001',
    title: 'Eating Lunch',
  },
  {
    id: '002',
    title: 'Social Media',
  },
  {
    id: '003',
    title: 'Taking a nap.',
  },
    {
    id: '004',
    title: 'Bath Time.',
  },
  {
    id: '005',
    title: 'Watching movie',
  },
  {
    id: '006',
    title: 'Going out for snack.',
  },
  {
    id: '007',
    title: 'Play with Wednesday.',
  },
  {
    id: '008',
    title: 'Prepare for Dinner.',
  },
];
const EVENING= [
  {
    id: '001',
    title: 'Eating Dinner.',
  },
  {
    id: '002',
    title: 'Washing Dishes.',
  },
  {
    id: '003',
    title: 'Watching movie.',
  },
  {
    id: '004',
    title: 'Going out for midnight snack.',
  },
  {
    id: '005',
    title: 'Drinking Coffee.',
  },
  {
    id: '006',
    title: 'Watching Netflix Series.',
  },
  {
    id: '007',
    title: 'Social Media',
  },
  {
    id: '008',
    title: 'Skin Care',
  },
  {
    id: '009',
    title: 'Listening to relaxing song.',
  },
    {
    id: '010',
    title: 'Sleep Time',
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.boldText}>MORNING</Text>
        </TouchableOpacity>
        <FlatList
          data={MORNING}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.boldTextTWO}>AFTERNOON</Text>
    </TouchableOpacity>
        <FlatList
          data={AFTERNOON}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.boldTextTHREE}>EVENING</Text>
    </TouchableOpacity>
        <FlatList
          data={EVENING}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  boldText: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
     color: 'white',
    backgroundColor: 'blue',
    borderColor: 'red',
  },
  boldTextTWO: {
    marginTop: 1,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'red',
  },
  boldTextTHREE: {
    marginTop: 1,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'red',
  },
  item: {
    backgroundColor: 'skyblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;