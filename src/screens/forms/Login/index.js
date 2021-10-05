import { useFormik } from 'formik';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Field, FormButton } from '../../../shared/components';
import { LoginSchema } from '../../../shared/schemas';
import { formStyles } from '../styles';

const loginIcon = require('../../../assets/login-icon.png');

const INITIAL_FORM = {
  username: '',
  password: ''
};

export function Login({ navigation }) {

  const toLogupForm = () => { navigation.navigate('logup') };

  const submitHandler = data => {
    console.log(data);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isValid
  } = useFormik({
    initialValues: INITIAL_FORM,
    validationSchema: LoginSchema,
    onSubmit: submitHandler
  });

  return (
    <View style={formStyles.form}>
      <Image source={loginIcon} style={formStyles.formImage}/>
      <Text style={formStyles.formText}>
        Complete with your credentials
      </Text>
      <Field
        placeholder="Username"
        value={values.username}
        error={errors.username}
        touched={touched.username}
        onBlur={handleBlur('username')}
        onChange={handleChange('username')}
      />
      <Field
        placeholder="Password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onBlur={handleBlur('password')}
        onChange={handleChange('password')}
      />
      <FormButton
        text="Submit"
        onPress={handleSubmit}
        disabled={!isValid}
      />
      <Text style={formStyles.formAnchorText}>
        Still not registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLogupForm}>
          Let's do it!
        </Text>
      </Text>
    </View>
  );

};