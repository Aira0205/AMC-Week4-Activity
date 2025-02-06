import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

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

const morningColors = ['blue', 'skyblue', 'red', 'violet', 'orange'];
const afternoonColors = ['green', 'red', 'orange', 'yellow', 'tomato'];
const eveningColors = ['violet', 'pink', 'orannge', 'maroon', 'red'];

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index, sectionColors }) => {
    const backgroundColor = item.id === selectedId ? 'blue' : sectionColors[index % sectionColors.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.boldText}>MORNING</Text>
        <FlatList
          data={MORNING}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: morningColors })}
          keyExtractor={item => item.id}
        />

        <Text style={styles.boldTextTWO}>AFTERNOON</Text>
        <FlatList
          data={AFTERNOON}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: afternoonColors })}
          keyExtractor={item => item.id}
        />

        <Text style={styles.boldTextTHREE}>EVENING</Text>
        <FlatList
          data={EVENING}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: eveningColors })}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

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
    backgroundColor: 'skyblue',
    borderColor: 'blue',
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
   backgroundColor: 'skyblue',
    borderColor: 'blue',
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
    backgroundColor: 'skyblue',
    borderColor: 'blue',
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