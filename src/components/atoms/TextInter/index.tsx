import {StyleSheet, Text, TextProps, View} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../../../assets';

interface CustomTextProps extends TextProps {
  children: any;
}

const TextInter: FC<CustomTextProps> = (props: CustomTextProps) => {
  const {children, style, ...textProps} = props;
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default TextInter;

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.fontDark,
    fontSize: 12,
  },
});
