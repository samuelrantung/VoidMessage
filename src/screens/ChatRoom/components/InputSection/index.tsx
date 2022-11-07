import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, TextInter} from '../../../../components';
import {PaperPlaneIcon, SmileyStickerIcon, theme} from '../../../../assets';
import socket from '../../../../utils/socket';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux';

const InputSection = ({roomId}) => {
  const userName = useSelector((state: RootState) => state.UserReducer.name);
  const hour =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : `${new Date().getHours()}`;

  const mins =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : `${new Date().getMinutes()}`;

  const [message, setMessage] = useState({
    message: '',
    room_id: roomId,
    user: userName,
    timestamp: {hour, mins},
  });
  const sendMessage = () => {
    socket.emit('new_message', message);
    setMessage({
      ...message,
      message: '',
    });
  };

  return (
    <View style={styles.position}>
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <SmileyStickerIcon />
          <Gap width={8} />
          <TextInput
            value={message.message}
            style={styles.textInput}
            onChangeText={val =>
              setMessage({
                ...message,
                message: val,
                room_id: roomId,
              })
            }
            placeholder="Type a message"
          />
        </View>
        <Gap width={8} />
        <TouchableOpacity
          style={styles.sendButtonContainer}
          onPress={() => sendMessage()}>
          <PaperPlaneIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 8 : 32,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  textInputContainer: {
    backgroundColor: theme.colors.white,
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontFamily: theme.fonts.inter.regular,
    fontSize: 16,
  },
  sendButtonContainer: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 50,
  },
});
