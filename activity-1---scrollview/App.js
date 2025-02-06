import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';

const App = () => (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          aira aira aira aira aira aira aira aira aira aira aira aira aira aira aira aira
        </Text>
      </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 80,
    padding: 12,
  },
});

export default App;