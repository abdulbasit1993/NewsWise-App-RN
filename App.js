import React, {useContext} from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Context, {NewsContext} from './src/API/Context';
import NewsTabs from './src/components/NewsTabs';

function App() {
  const {darkTheme} = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? '#282C35' : 'white',
      }}>
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

// Tutorial link: https://youtu.be/5Ko7B3G4U04?t=4390
