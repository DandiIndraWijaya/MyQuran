import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../theme';
import {Ellipse} from '../../../assets/svg';

interface Props {
  navigation: any;
  surah: {
    name: string;
    number: number;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
}

const Surah: React.FC<Props> = ({surah, navigation}: Props) => {
  const onPress = () => {
    navigation.navigate('Surah', surah);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.item}>
        <View style={styles.numberContainer}>
          <ImageBackground
            source={require('../../../assets/png/ayah-number.png')}
            style={styles.numberBorder}>
            <Text style={styles.numberText}>{surah.number}</Text>
          </ImageBackground>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.surahText}>{surah.englishName}</Text>
          <View style={styles.information}>
            <Text style={styles.informationText}>
              {surah.revelationType.toUpperCase()}
            </Text>
            <View style={styles.ellipse}>
              <Ellipse />
            </View>
            <Text style={styles.informationText}>{surah.numberOfAyahs}</Text>
            <Text style={styles.informationText}>VERSES</Text>
          </View>
        </View>
        <View>
          <Text style={styles.arabSurahText}>{surah.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    display: 'flex',
    borderBottomColor: theme.color.darkText,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    flexGrow: 1,
    padding: 5,
  },
  numberBorder: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 14,
    color: theme.color.white,
    fontFamily: theme.font.medium,
  },
  informationContainer: {
    flexGrow: 7,
    paddingLeft: 10,
  },
  surahText: {
    color: theme.color.white,
    fontFamily: theme.font.medium,
    fontSize: 16,
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  informationText: {
    color: theme.color.darkText,
    fontFamily: theme.font.medium,
    fontSize: 12,
    marginRight: 5,
  },
  ellipse: {
    marginRight: 5,
  },
  arabSurahText: {
    fontSize: 20,
    fontFamily: theme.font.bold,
    color: theme.color.primary,
  },
});

export default Surah;
