import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import IncomingMessage from './IncomingMessage';
import SentMessage from './SentMessage';

const Messages = () => {
  return (
    <View style={styles.container}>
      <IncomingMessage />
      <SentMessage />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
