import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from '../../../../assets';
import IncomingMessage from './IncomingMessage';
import SentMessage from './SentMessage';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux';

const Messages = ({messages}) => {
  const userName = useSelector((state: RootState) => state.UserReducer.name);
  return (
    <View style={styles.container}>
      {messages.map(message =>
        message.user === userName ? (
          <SentMessage message={message} key={message.id} />
        ) : (
          <IncomingMessage message={message} key={message.id} />
        ),
      )}
      {/* {messages.map(message => (
        <IncomingMessage message={message} key={message.id} />
      ))} */}
      {/* <IncomingMessage />
      <SentMessage /> */}
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
