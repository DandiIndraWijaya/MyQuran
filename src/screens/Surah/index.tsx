import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import theme from '../../theme';
import {getSurahDetail} from '../../api/services';
import SoundPlayer from 'react-native-sound-player';

import Header from './components/Header';
import SurahDetail from './components/SurahDetail';
import Ayah from './components/Ayah';
import AyahShimmer from './components/AyahShimmer';

interface Props {
  navigation: any;
  route: {
    params: {
      name: string;
      number: number;
      englishName: string;
      englishNameTranslation: string;
      numberOfAyahs: number;
      revelationType: string;
    };
  };
}

interface ayahs {
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
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Surah: React.FC<Props> = ({navigation, route}: Props) => {
  const data = route.params;
  const [ayahs, setAyahs] = useState<Array<ayahs>>([]);
  const [ayahsTranslate, setAyahTranslate] = useState([]);
  const [playIndex, setPlayIndex] = useState<any>(null);
  const [isPlayAll, setIsPlayAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePlayALl = () => {
    if (playIndex === null) {
      setPlayIndex(0);
    }
    if (isPlayAll) {
      setIsPlayAll(false);
      setPlayIndex(null);
      SoundPlayer.stop();
    } else {
      setIsPlayAll(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSurahDetail(data.number, 'ar.alafasy')
      .then(resAlafasy => {
        getSurahDetail(data.number, 'en.asad')
          .then(resAsad => {
            setAyahs(resAlafasy.data.ayahs);
            setAyahTranslate(resAsad.data.ayahs);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      })
      .catch(() => setLoading(false));
  }, []);

  const onBack = () => {
    navigation.goBack();
  };

  const playAudio = (index: number) => {
    try {
      SoundPlayer.playUrl(ayahs[index].audio);
      SoundPlayer.addEventListener('FinishedPlaying', () =>
        setPlayIndex(playIndex + 1),
      );
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  const pauseAudioFromAyahComponent = () => {
    setPlayIndex(null);
    setIsPlayAll(false);
    SoundPlayer.stop();
  };

  const resumeAudioFromAyahComponent = (index: number) => {
    setPlayIndex(index - 1);
    setIsPlayAll(true);
  };

  useEffect(() => {
    playAudio(playIndex);
  }, [playIndex]);

  return (
    <View style={styles.root}>
      <Header onBack={onBack} surahName={data.englishName} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.surahDetail}>
          <SurahDetail
            data={data}
            isPlayAll={isPlayAll}
            togglePlayAll={togglePlayALl}
          />
        </View>
        <View style={styles.ayahs}>
          {ayahs.length > 1 &&
            !loading &&
            ayahs.map((ayah, key) => (
              <View key={key}>
                <Ayah
                  data={ayah}
                  index={key}
                  isPlaying={key === playIndex}
                  translate={ayahsTranslate}
                  pauseAudio={pauseAudioFromAyahComponent}
                  resumeAudio={resumeAudioFromAyahComponent}
                />
              </View>
            ))}
          {loading && <AyahShimmer />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.dark,
    padding: 30,
    height: SCREEN_HEIGHT,
  },
  surahDetail: {
    marginTop: 30,
  },
  ayahs: {
    marginTop: 20,
  },
});

export default Surah;
