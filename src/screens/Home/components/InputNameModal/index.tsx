import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changeName} from '../../../../redux/slices/userSlice';
import socket from '../../../../utils/socket';
import {changeActiveRoom} from '../../../../redux/slices/roomSlice';
import {Gap, TextInter} from '../../../../components';
import {theme} from '../../../../assets';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const InputNameModal: FC<Props> = ({isOpen, setIsOpen}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleContinue = async () => {
    await dispatch(changeName(name));
    setIsOpen(false);
  };
  return (
    <Modal
      visible={isOpen}
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

export default InputNameModal;

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
