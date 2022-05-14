import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../../theme';
import {SearchIcon, BackIcon} from '../../../assets/svg';

interface Props {
  surahName: string;
  onBack: () => void;
}

const Header: React.FC<Props> = ({onBack, surahName}: Props) => {
  return (
    <View style={style.container}>
      <View style={style.backIcon}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.8}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View style={style.title}>
        <Text style={style.textTitle}>{surahName}</Text>
      </View>
      <View style={style.searchIcon}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 3,
  },
  textTitle: {
    color: theme.color.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  searchIcon: {
    alignItems: 'flex-end',
    flexGrow: 6,
  },
});
