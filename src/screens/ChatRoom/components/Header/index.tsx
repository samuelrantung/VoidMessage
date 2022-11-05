import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import BackIcon from '../../../../assets/icons/back.svg';
import TextInter from '../../../../components/atoms/TextInter';

const Header = () => {
  return (
    <View style={styles.container}>
      <BackIcon />
      <View style={styles.profileContainer}>
        <View style={styles.pictureContainer}>
          <View style={styles.onlineIndicator} />
        </View>
        <View style={styles.textContainer}>
          <TextInter style={styles.name}>Samuel Rantung</TextInter>
          <TextInter style={styles.status}>Online</TextInter>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  pictureContainer: {
    marginLeft: 12,
    width: 44,
    height: 44,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textContainer: {
    marginLeft: 12,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: theme.fonts.inter.medium,
  },
  status: {
    fontSize: 12,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.lightGray,
  },
});
