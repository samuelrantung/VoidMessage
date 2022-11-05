import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  height?: number;
  width?: number;
}

const Gap: FC<Props> = ({height, width}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
