import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../theme';
import {Bismillah, Ellipse} from '../../../assets/svg';

interface Props {
  togglePlayAll: () => void;
  isPlayAll: boolean;
  data: {
    name: string;
    number: number;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
}

const SurahDetail: React.FC<Props> = ({
  togglePlayAll,
  isPlayAll,
  data,
}: Props) => {
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
          <View style={styles.bottom}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => togglePlayAll()}>
              <View style={styles.playContainer}>
                {isPlayAll ? (
                  <Text style={styles.playText}>STOP</Text>
                ) : (
                  <Text style={styles.playText}>PLAY</Text>
                )}
              </View>
            </TouchableOpacity>
            <Bismillah />
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
    padding: 20,
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
    marginTop: 10,
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
  bottom: {
    display: 'flex',
    alignItems: 'center',
  },
  playContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    // paddingHorizontal: 15,
    width: 65,
    height: 30,
    justifyContent: 'center',
    backgroundColor: theme.color.white,
    borderRadius: 8,
  },
  playText: {
    color: theme.color.darkText,
    fontFamily: theme.font.bold,
  },
  iconCircle: {
    borderWidth: 2,
    width: 17,
    height: 17,
    borderColor: theme.color.darkText,
    borderRadius: 3,
  },
});

export default SurahDetail;
