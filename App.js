import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Context from './src/API/Context';
import NewsTabs from './src/components/NewsTabs';

function App() {
  return (
    <View style={{...styles.container, backgroundColor: '#282C35'}}>
      <NewsTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

// Tutorial link: https://youtu.be/5Ko7B3G4U04
