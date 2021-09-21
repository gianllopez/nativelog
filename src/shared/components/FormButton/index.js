import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function FormButton() {
  return (
    <TouchableOpacity style={styles.formButton} activeOpacity={0.7}>
      <Text style={styles.buttonText}>
        Continue
      </Text>
    </TouchableOpacity>
  );
};
