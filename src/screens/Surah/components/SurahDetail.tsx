import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import theme from '../../../theme';
import {Ellipse, Bismillah} from '../../../assets/svg';

interface Props {
  data: {
    name: string;
    number: number;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
}

const SurahDetail: React.FC<Props> = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/png/surah-detail-bg.png')}
        style={styles.imageBackground}>
        <View style={styles.informationContainer}>
          <View style={styles.topInformation}>
            <Text style={styles.titleText}>{data.englishName}</Text>
            <Text style={styles.surahTranslate}>
              {data.englishNameTranslation}
            </Text>
            <View style={styles.divider} />
            <View style={styles.information}>
              <Text style={styles.informationText}>
                {data.revelationType.toUpperCase()}
              </Text>
              <View style={styles.ellipse}>
                <Ellipse />
              </View>
              <Text style={styles.informationText}>{data.numberOfAyahs}</Text>
              <Text style={styles.informationText}>VERSES</Text>
            </View>
          </View>
          <Bismillah />
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
    padding: 30,
    height: 275,
  },
  informationContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topInformation: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    color: theme.color.white,
    fontFamily: theme.font.medium,
    fontSize: 26,
  },
  surahTranslate: {
    fontSize: 16,
    fontFamily: theme.font.medium,
    color: theme.color.white,
    marginTop: 10,
  },
  divider: {
    backgroundColor: theme.color.white,
    height: 0.5,
    width: 165,
    marginTop: 20,
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  informationText: {
    color: theme.color.white,
    fontFamily: theme.font.medium,
    fontSize: 14,
    marginRight: 5,
  },
  ellipse: {
    marginRight: 5,
  },
});

export default SurahDetail;
