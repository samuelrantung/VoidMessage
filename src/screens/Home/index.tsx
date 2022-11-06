import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import socket from '../../utils/socket';
import {baseUrl} from '../../config';
import axios from 'axios';
import {Gap, TextInter} from '../../components';
import {theme} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {changeName, createRoom} from '../../redux/slices/userSlice';
import {RootState} from '../../redux';
import {changeActiveRoom, changeRoomList} from '../../redux/slices/roomSlice';

const Home = () => {
  socket.connect();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [openModal, setOpenModal] = useState(false);
  const [openModalJoin, setOpenModalJoin] = useState(false);
  const [roomList, setRoomList] = useState();
  useEffect(() => {
    socket.on('roomsList', rooms => {
      console.log('new room detected', Platform.OS, rooms);
      setRoomList(rooms);
      dispatch(changeRoomList(rooms));
    });
  }, [socket]);

  const fetchRoom = async () => {
    // axios.get(`${baseUrl}/api`).then(res => {
    //   console.log('room', res);
    // });
    await axios
      .get(`${baseUrl}/api`)
      .then(res => {
        console.log('room', res.data);
      })
      .catch(err => console.log('error ', err));
  };

  const NameModal = () => {
    const [name, setName] = useState('');
    const handleContinue = async () => {
      console.log('continue');
      dispatch(changeName(name));
      await socket.emit('createRoom', name);
      await socket.on('activeRoom', roomId => {
        console.log('roomId hehe', roomId);
        dispatch(changeActiveRoom(roomId));
      });
      setOpenModal(false);
      navigation.navigate('ChatRoom');
    };
    return (
      <Modal
        visible={openModal}
        animationType="slide"
        transparent
        presentationStyle="overFullScreen">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.modalInnerContainer}>
            <View style={styles.nameTextInputContainer}>
              <TextInter style={styles.nameTextInputLabel}>Name</TextInter>
              <Gap height={8} />
              <TextInput
                value={name}
                style={styles.nameTextInput}
                placeholder="What you should be called?"
                onChangeText={v => setName(v)}
              />
            </View>
            <Gap height={16} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancel]}
                onPress={() => {
                  setOpenModal(false);
                }}>
                <TextInter style={[styles.label, styles.labelCancel]}>
                  Cancel
                </TextInter>
              </TouchableOpacity>
              <Gap width={8} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleContinue()}>
                <TextInter style={styles.label}>Continue</TextInter>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const JoinModal = () => {
    const [roomId, setRoomId] = useState('');
    const [name, setName] = useState('');

    const handleContinue = async () => {
      console.log('continue');
      await dispatch(changeName(name));

      await dispatch(
        changeActiveRoom(roomList?.filter(x => x.id === roomId)[0].id),
      );

      setOpenModalJoin(false);
      navigation.navigate('ChatRoom');
    };
    return (
      <Modal
        visible={openModalJoin}
        animationType="slide"
        transparent
        presentationStyle="overFullScreen">
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.modalInnerContainer}>
            <View style={styles.nameTextInputContainer}>
              <TextInter style={styles.nameTextInputLabel}>Name</TextInter>
              <Gap height={8} />
              <TextInput
                value={name}
                style={styles.nameTextInput}
                placeholder="What you should be called?"
                onChangeText={v => setName(v)}
              />
            </View>
            <View style={styles.nameTextInputContainer}>
              <TextInter style={styles.nameTextInputLabel}>Room ID</TextInter>
              <Gap height={8} />
              <TextInput
                value={roomId}
                style={styles.nameTextInput}
                placeholder="Please enter room ID you want to join"
                onChangeText={v => setRoomId(v)}
              />
            </View>
            <Gap height={16} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancel]}
                onPress={() => {
                  setOpenModalJoin(false);
                }}>
                <TextInter style={[styles.label, styles.labelCancel]}>
                  Cancel
                </TextInter>
              </TouchableOpacity>
              <Gap width={8} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleContinue()}>
                <TextInter style={styles.label}>Continue</TextInter>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button
          title="Chat"
          onPress={() => {
            // openChat();
            setOpenModal(true);
          }}
        />
        <Button
          title="Chat Room"
          onPress={() => {
            fetchRoom();
          }}
        />
        <Button
          title="Connect"
          onPress={() => {
            socket.connect();
            console.log('try to connect');
          }}
        />
        <Button
          title="Send Message"
          onPress={() => {
            console.log('sending message');
          }}
        />
        <Button
          title="Create Room"
          onPress={() => {
            console.log('join');
          }}
        />
        <Button
          title="Join Room"
          onPress={() => {
            setOpenModalJoin(true);
          }}
        />
        <Button
          title="Send Message"
          onPress={() => {
            console.log('Send Message');
            socket.emit('newMessage', message);
          }}
        />
      </View>
      <NameModal />
      <JoinModal />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalInnerContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  nameTextInputContainer: {
    width: '100%',
  },
  nameTextInputLabel: {
    fontSize: 14,
  },
  nameTextInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  cancel: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  label: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.inter.medium,
  },
  labelCancel: {
    color: theme.colors.primary,
  },
});
