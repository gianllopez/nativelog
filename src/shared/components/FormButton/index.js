import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Loader } from './Loader';
import styles from './styles';

export function FormButton(props) {

  let { text = 'Continue', onPress, disabled, isLoading } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.formButton}
      activeOpacity={disabled ? 1 : 0.7}>
      { isLoading ? 
        <Loader/> :
        <Text style={styles.buttonText}>
          { text }
        </Text> }
    </TouchableOpacity>
  );

};
