import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import theme from '../../theme';
import {getSurahDetail} from '../../api/services';

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

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Surah: React.FC<Props> = ({navigation, route}: Props) => {
  const data = route.params;
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSurahDetail(data.number)
      .then(res => {
        setAyahs(res.data.ayahs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Header onBack={onBack} surahName={data.englishName} />
      <View style={styles.surahDetail}>
        <SurahDetail data={data} />
      </View>
      <View style={styles.ayahs}>
        <ScrollView>
          {ayahs.length > 1 &&
            !loading &&
            ayahs.map((ayah, key) => (
              <View key={key}>
                <Ayah data={ayah} />
              </View>
            ))}
          {loading && <AyahShimmer />}
        </ScrollView>
      </View>
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
    height: SCREEN_HEIGHT - 370,
  },
});

export default Surah;
