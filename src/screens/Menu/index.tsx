import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../../theme';

import Header from './components/Header';
import Welcome from './components/Welcome';
import LastRead from './components/LastRead';

const Menu: React.FC = () => {
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.welcome}>
        <Welcome />
      </View>
      <View style={styles.lastRead}>
        <LastRead />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: theme.color.dark,
    padding: 30,
  },
  welcome: {
    marginTop: 40,
  },
  lastRead: {
    marginTop: 30,
  },
});
