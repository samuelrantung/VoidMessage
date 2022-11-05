import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Gap, TextInter} from '../../../../components';
import {PaperPlaneIcon, SmileyStickerIcon, theme} from '../../../../assets';

const InputSection = () => {
  return (
    <View style={styles.position}>
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <SmileyStickerIcon />
          <Gap width={8} />
          <TextInput style={styles.textInput} placeholder="Type a message" />
        </View>
        <Gap width={8} />
        <View style={styles.sendButtonContainer}>
          <PaperPlaneIcon />
        </View>
      </View>
    </View>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 8,
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
