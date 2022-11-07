import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import socket from '../../utils/socket';
import {useDispatch, useSelector} from 'react-redux';
import {changeRoomList} from '../../redux/slices/roomSlice';
import {CreateRoomModal, JoinRoomModal} from './components';
import {changeSocketId} from '../../redux/slices/userSlice';
import {TextInter} from '../../components';
import {RootState} from '../../redux';
import InputNameModal from './components/InputNameModal';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  socket.connect();

  const userName = useSelector((state: RootState) => state.UserReducer.name);
  const [inputNameIsOpen, setInputNameIsOpen] = useState(false);

  const [joinRoomIsOpen, setJoinRoomIsOpen] = useState(false);
  const [createRoomIsOpen, setCreateRoomIsOpen] = useState(false);

  const handleGoToChat = () => {
    navigation.navigate('ChatRoom');
  };

  const handleJoinRoom = () => {
    navigation.navigate('ChatRoom');
  };

  useEffect(() => {
    dispatch(changeSocketId(socket.id));
    // socket.on('active_user', resp => {
    //   console.log('list active user', resp);
    // });
    socket.on('room_list', async rooms => {
      console.log('new room detected', Platform.OS, rooms);
      await dispatch(changeRoomList(rooms));
    });
  }, [socket]);

  useEffect(() => {
    if (userName.length === 0) {
      setInputNameIsOpen(true);
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {userName.length > 0 && <TextInter>Hi there, {userName}</TextInter>}
        <Button
          title="Chat"
          onPress={() => {
            handleGoToChat();
            // setCreateRoomIsOpen(true);
          }}
        />
        {/* <Button
          title="Join Room"
          onPress={() => {
            // setJoinRoomIsOpen(true);
            handleJoinRoom();
          }}
        /> */}
      </View>
      <CreateRoomModal
        isOpen={createRoomIsOpen}
        setIsOpen={setCreateRoomIsOpen}
      />
      <JoinRoomModal isOpen={joinRoomIsOpen} setIsOpen={setJoinRoomIsOpen} />
      <InputNameModal isOpen={inputNameIsOpen} setIsOpen={setInputNameIsOpen} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
});
