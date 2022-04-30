import React, {useEffect} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {QuranSplash} from '../../assets/svg';
import theme from '../../theme';

const Splash: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Menu');
    }, 1000);
  }, []);

  return (
    // <SafeAreaView>
    <View style={styles.root}>
      <View style={styles.center}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>MyQuran</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Learn Quran and </Text>
            <Text style={styles.subtitle}>Recite one everyday</Text>
          </View>
        </View>
        <QuranSplash />
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: theme.color.dark,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: theme.color.white,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  subtitleContainer: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: theme.color.white,
    fontFamily: 'Roboto-Light',
  },
});
