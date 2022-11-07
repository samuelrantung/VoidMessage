import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Header, InputSection, Messages} from './components';
import {useNavigation} from '@react-navigation/native';
import socket from '../../utils/socket';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {changeActiveRoom} from '../../redux/slices/roomSlice';

const ChatRoom = () => {
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [clientName, setClientName] = useState('Loading');

  const userName = useSelector((state: RootState) => state.UserReducer.name);

  const activeRoomId = useSelector(
    (state: RootState) => state.RoomReducer.activeRoom,
  );
  const roomList = useSelector(
    (state: RootState) => state.RoomReducer.roomList,
  );

  useEffect(() => {
    socket.on('active_room', room_id => {
      dispatch(changeActiveRoom(room_id));
    });

    socket.on('incoming_message', new_message => {
      setMessages(new_message);
    });
  }, [socket]);

  useEffect(() => {
    const temp = roomList?.[0].user.filter(x => x !== userName);
    setClientName(temp);
  }, [roomList]);

  useEffect(() => {
    if (roomList === null) {
      socket.emit('create_room', userName);
    } else {
      socket.emit('join_room', roomList[0].id, userName);
      dispatch(changeActiveRoom(roomList[0].id));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header roomId={activeRoomId} clientName={clientName} />
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
