import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import theme from '../../../theme';
import {ReadMeIcon} from '../../../assets/svg';

const LastRead: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/png/last-read-bg.png')}
        style={styles.imageBackground}>
        <View style={styles.informationContainer}>
          <View style={styles.titleContainer}>
            <ReadMeIcon />
            <Text style={styles.titleText}>Last Read</Text>
          </View>
          <View>
            <Text style={styles.surah}>Al-Fatihah</Text>
            <Text style={styles.ayah}>Ayah No: 1</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageBackground: {
    padding: 25,
    height: 140,
  },
  informationContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    marginLeft: 10,
    color: theme.color.white,
    fontFamily: theme.font.medium,
    fontSize: 14,
  },
  surah: {
    fontSize: 18,
    fontFamily: theme.font.medium,
    color: theme.color.white,
  },
  ayah: {
    fontSize: 14,
    fontFamily: theme.font.light,
    color: theme.color.white,
  },
});

export default LastRead;
