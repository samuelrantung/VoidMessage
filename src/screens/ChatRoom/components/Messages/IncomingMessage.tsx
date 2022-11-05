import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import {Gap, TextInter} from '../../../../components';

const IncomingMessage = () => {
  return (
    <View style={styles.container}>
      <TextInter style={styles.message}>
        Hello there! Hello there! Hello there! Hello there! Hello there! Hello
        there! Hello there! Hello there! Hello there!
      </TextInter>
      <Gap width={10} />
      <TextInter style={styles.time}>14.12</TextInter>
    </View>
  );
};

export default IncomingMessage;

const styles = StyleSheet.create({
  row: {
    width: '100%',
  },
  container: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    maxWidth: '90%',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    maxWidth: '90%',
  },
  time: {
    fontSize: 10,
    color: theme.colors.lightGray,
  },
});
