import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Field } from '../../shared/components/Field';

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formImage: { width: 85, height: 85 },
  formText: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10
  }
});

const userIcon = require('../../assets/user-icon.png');

export function Login() {
  return (
    <View style={styles.loginForm}>
      <Image source={userIcon} style={styles.formImage}/>
      <Text style={styles.formText}>
        Fill the form to continue
      </Text>
      <Field/>
    </View>
  );
};