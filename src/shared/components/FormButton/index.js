import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function FormButton(props) {

  let { text = 'Continue', onPress } = props;

  return (
    <TouchableOpacity
      style={styles.formButton}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>
        { text }
      </Text>
    </TouchableOpacity>
  );

};
