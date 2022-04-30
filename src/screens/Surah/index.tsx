import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';

interface Props {
  navigation: any;
  route: any;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Surah: React.FC<Props> = ({navigation, route}: Props) => {
  const {surahNumber} = route.params;
  console.log('SURAH NUMBER: ', surahNumber);
  return (
    <View style={styles.root}>
      <Text>SURAH SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.dark,
    height: SCREEN_HEIGHT,
  },
});

export default Surah;
