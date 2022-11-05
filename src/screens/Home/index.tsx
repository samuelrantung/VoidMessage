import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import socket from '../../utils/socket';
import {baseUrl} from '../../config';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();

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

  useEffect(() => {
    fetchRoom();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button
          title="Chat"
          onPress={() => {
            navigation.navigate('ChatRoom');
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
            console.log('Create Room');
            socket.emit('createRoom', 'customRoom');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
