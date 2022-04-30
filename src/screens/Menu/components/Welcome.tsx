import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../theme';

const Welcome: React.FC = () => {
  return (
    <View>
      <Text style={styles.salam}>Assalamualaikum</Text>
      <Text style={styles.reader}>Dandi Indra Wijaya</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  salam: {
    color: theme.color.darkText,
    fontSize: 18,
    fontFamily: theme.font.medium,
  },
  reader: {
    fontSize: 24,
    fontFamily: theme.font.medium,
    color: theme.color.white,
    marginTop: 5,
  },
});
