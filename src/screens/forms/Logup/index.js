import React from 'react';
import { Image, Text, View } from 'react-native';
import { Formik } from 'formik';
import { Field, FormButton } from '../../../shared/components';
import { formStyles } from '../styles';
import { Fragment } from 'react';

const logupIcon = require('../../../assets/logup-icon.png');

const INITIAL_FORM = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: ''
};

export function Logup({ navigation }) {

  const toLoginForm = () => { navigation.navigate('login') };

  const submitHandler = data => {
    console.log(data);
  };

  return (
    <View style={formStyles.form}>
      <Image source={logupIcon} style={formStyles.formImage}/>
      <Text style={formStyles.formText}>
        Fill the form to continue
      </Text>
      <Formik initialValues={INITIAL_FORM} onSubmit={submitHandler}>
        { handler => {
          let { handleChange, handleBlur, handleSubmit, values } = handler;
          return (
            <Fragment>
              <Field
                onChange={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
                placeholder="First name"
              />
              <Field
                onChange={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                value={values.last_name}
                placeholder="Last name"
              />
              <Field
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
              />
              <Field
                onChange={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Username"
              />
              <Field
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
              />
              <FormButton onPress={handleSubmit}/>
            </Fragment>
          );
        }}
      </Formik>
      <Text style={formStyles.formAnchorText}>
        Already registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLoginForm}>
          Log in!
        </Text>
      </Text>
    </View>
  );

};