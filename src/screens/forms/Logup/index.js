import React from 'react';
import { Image, Text, View } from 'react-native';
import { useFormik } from 'formik';
import { LogupSchema } from '../../../shared/schemas';
import { Field, FormButton } from '../../../shared/components';
import { formStyles } from '../styles';

const logupIcon = require('../../../assets/logup-icon.png');

const INITIAL_FORM = {
  full_name: '',
  email: '',
  username: '',
  password: ''
};

export function Logup({ navigation }) {  

  const toLoginForm = () => { navigation.navigate('login') };

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
    validationSchema: LogupSchema,
    onSubmit: submitHandler
  });

  return (
    <View style={formStyles.form}>
      <Image source={logupIcon} style={formStyles.formImage}/>
      <Text style={formStyles.formText}>
        Fill the form to continue
      </Text>
      <Field
        placeholder="Full name"
        value={values.full_name}
        error={errors.full_name}
        touched={touched.full_name}
        onBlur={handleBlur('full_name')}
        onChange={handleChange('full_name')}
      />
      <Field
        placeholder="Email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onBlur={handleBlur('email')}
        onChange={handleChange('email')}
      />
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
      <FormButton onPress={handleSubmit} disabled={!isValid}/>
      <Text style={formStyles.formAnchorText}>
        Already registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLoginForm}>
          Log in!
        </Text>
      </Text>
    </View>
  );

};