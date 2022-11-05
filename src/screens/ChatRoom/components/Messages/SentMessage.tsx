import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import {Gap, TextInter} from '../../../../components';

const SentMessage = () => {
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

export default SentMessage;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    maxWidth: '90%',
    flexDirection: 'row',
    backgroundColor: theme.colors.dark,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    maxWidth: '90%',
    color: theme.colors.white,
  },
  time: {
    fontSize: 10,
    color: theme.colors.lightGray,
  },
});
