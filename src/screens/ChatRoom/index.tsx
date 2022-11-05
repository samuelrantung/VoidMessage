import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Header, InputSection, Messages} from './components';

const ChatRoom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Messages />
      <InputSection />
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
