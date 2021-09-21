import React from 'react';
import { View, Text, Image } from 'react-native';
import { FormButton } from '../../shared/components/FormButton';
import { Field } from '../../shared/components/Field';
import styles from './styles';

const userIcon = require('../../assets/user-icon.png');

export function Login({ navigation }) {

  const toLogupForm = () => { navigation.navigate('logup') };

  return (
    <View style={styles.loginForm}>
      <Image source={userIcon} style={styles.formImage}/>
      <Text style={styles.formText}>
        Fill the form to continue
      </Text>
      <Field placeholder="Username"/>
      <Field placeholder="Password"/>
      <FormButton/>
      <Text style={styles.bottomText}>
        Still not registered? {' '}
        <Text style={styles.logUpAnchor} onPress={toLogupForm}>
          Let's do it!
        </Text>
      </Text>
    </View>
  );

};