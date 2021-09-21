import React from 'react';
import { View, Text, Image } from 'react-native';
import { FormButton } from '../../../shared/components/FormButton';
import { Field } from '../../../shared/components/Field';
import { formStyles } from '../styles';

const loginIcon = require('../../../assets/login-icon.png');

export function Login({ navigation }) {

  const toLogupForm = () => { navigation.navigate('logup') };

  return (
    <View style={formStyles.form}>
      <Image source={loginIcon} style={formStyles.formImage}/>
      <Text style={formStyles.formText}>
        Complete with your credentials
      </Text>
      <Field placeholder="Username"/>
      <Field placeholder="Password"/>
      <FormButton text="Submit"/>
      <Text style={formStyles.formAnchorText}>
        Still not registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLogupForm}>
          Let's do it!
        </Text>
      </Text>
    </View>
  );

};