import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function FormButton(props) {

  let { text = 'Continue', onPress, disabled } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.formButton}
      activeOpacity={disabled ? 1 : 0.7}>
      <Text style={styles.buttonText}>
        { text }
      </Text>
    </TouchableOpacity>
  );

};
