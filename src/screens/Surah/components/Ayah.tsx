import React from 'react';
import {View, Text} from 'react-native';

interface Props {
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

const Ayah: React.FC<Props> = ({data}: Props) => {
  return (
    <View>
      <Text>Ayah</Text>
    </View>
  );
};

export default Ayah;
