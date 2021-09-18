import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  loginForm: {},
  formImage: {},
  formText: {}
});

const userIcon = require('../../assets/user-icon.png');

export function Login() {
  return (
    <View style={styles.loginForm}>
      <Image source={userIcon} style={styles.formImage}/>
      <Text style={styles.formText}>
        Fill the form to continue
      </Text>
    </View>
  );
};