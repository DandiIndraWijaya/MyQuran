import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import theme from '../../theme';

import surahList from '../../data/surahList';

import Header from './components/Header';
import Welcome from './components/Welcome';
import LastRead from './components/LastRead';
import Surah from './components/Surah';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Menu: React.FC = () => {
  return (
    <View style={styles.root}>
      <View>
        <Header />
        <View style={styles.welcome}>
          <Welcome />
        </View>
        <View style={styles.lastRead}>
          <LastRead />
        </View>
      </View>
      <View style={styles.surahList}>
        <ScrollView>
          {surahList.map((surah, key) => (
            <View key={key}>
              <Surah surah={surah} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.dark,
    padding: 30,
    height: SCREEN_HEIGHT,
  },
  welcome: {
    marginTop: 40,
  },
  lastRead: {
    marginTop: 30,
  },
  surahList: {
    marginTop: 30,
    height: SCREEN_HEIGHT - 400,
  },
});
