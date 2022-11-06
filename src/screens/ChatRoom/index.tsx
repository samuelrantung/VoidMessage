import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Header, InputSection, Messages} from './components';
import {useNavigation} from '@react-navigation/native';
import socket from '../../utils/socket';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  // const room = useSelector((state: RootState) => state.UserReducer.rooms);
  const [rooms, setRooms] = useState([]);
  const activeRoomId = useSelector(
    (state: RootState) => state.RoomReducer.activeRoom,
  );
  console.log('activeRoom', activeRoomId);
  // const roomId = room[0].id;

  // socket.on('roomsList', resp => {
  //   console.log('roomsList', resp);
  //   setRooms(resp);
  // });

  useEffect(() => {
    socket.on('foundRoom', message => {
      setMessages(message);
    });
  }, [socket]);

  // useEffect(() => {
  //   socket.emit
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header roomId={activeRoomId} />
      <Messages messages={messages} />
      <InputSection roomId={activeRoomId} />
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
