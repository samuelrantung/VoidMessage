import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

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
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
