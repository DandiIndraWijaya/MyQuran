import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BookmarkIcon, PlayIcon, ShareIcon} from '../../../assets/svg';
import theme from '../../../theme';

interface Props {
  isPlaying: boolean;
  pauseAudio: (index: number) => void;
  resumeAudio: (index: number) => void;
  index: number;
  translate: Array<{
    text: string;
  }>;
  data: {
    number: number;
    audio: string;
    audioSecondary: Array<string>;
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: false;
  };
}

const Ayah: React.FC<Props> = ({
  pauseAudio,
  resumeAudio,
  isPlaying,
  index,
  translate,
  data,
}: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.audioPlayer}>
        <View style={styles.numberContainer}>
          <View style={styles.number}>
            <Text style={styles.numberText}>{data.number}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <ShareIcon />
        </View>
        <View style={styles.iconContainer}>
          {isPlaying ? (
            <TouchableOpacity
              onPress={() => pauseAudio(index)}
              activeOpacity={0.8}>
              <View style={styles.iconCircle}>
                <Text style={styles.verticalLine}>||</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => resumeAudio(index)}
              activeOpacity={0.8}>
              <PlayIcon />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.iconContainer}>
          <BookmarkIcon />
        </View>
      </View>
      <View style={styles.ayahContainer}>
        <Text style={styles.ayahArabText}>{data.text}</Text>
        <Text style={styles.ayahTranslateText}>{translate[index].text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    borderBottomColor: theme.color.darkText,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  audioPlayer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#152451',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  numberContainer: {
    flexBasis: '64%',
  },
  number: {
    backgroundColor: theme.color.primary,
    width: 25,
    height: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  numberText: {
    color: theme.color.white,
    fontFamily: theme.font.bold,
  },
  iconCircle: {
    // borderWidth: 2,
    width: 20,
    height: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: theme.color.primary,
    borderRadius: 3,
  },
  iconContainer: {
    flexBasis: '12%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ayahContainer: {},
  ayahArabText: {
    fontFamily: theme.font.bold,
    color: theme.color.white,
    fontSize: 18,
    marginTop: 20,
  },
  ayahTranslateText: {
    fontFamily: theme.font.light,
    color: theme.color.white,
    fontSize: 16,
    marginTop: 20,
  },
  verticalLine: {
    color: theme.color.primary,
    fontFamily: theme.font.bold,
    fontSize: 18,
  },
});

export default Ayah;
