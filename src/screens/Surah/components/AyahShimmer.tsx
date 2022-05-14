import React from 'react';
import {StyleSheet, View} from 'react-native';
import Shimmer from 'react-native-shimmer';
import theme from '../../../theme';

const AyahShimmer: React.FC = () => {
  return (
    <Shimmer>
      <View style={styles.container} />
    </Shimmer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.darkText,
    height: 200,
    borderRadius: 10,
  },
});

export default AyahShimmer;
