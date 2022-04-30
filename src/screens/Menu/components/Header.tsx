import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../theme';
import {SearchIcon, SidebarIcon} from '../../../assets/svg';

const Header: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.sidebarIcon}>
        <SidebarIcon />
      </View>
      <View style={style.title}>
        <Text style={style.textTitle}>MyQuran</Text>
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
  sidebarIcon: {
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
