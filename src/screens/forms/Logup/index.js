import React from 'react';
import { Image, Text, View } from 'react-native';
import { useFormik } from 'formik';
import { LogupSchema } from '../../../shared/schemas';
import { Field, FormButton } from '../../../shared/components';
import { formStyles } from '../styles';

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

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
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
        placeholder="First name"
        value={values.first_name}
        error={errors.first_name}
        touched={touched.first_name}
        onBlur={handleBlur('first_name')}
        onChange={handleChange('first_name')}
      />
      <Field
        placeholder="Last name"
        error={errors.last_name}
        value={values.last_name}
        touched={touched.last_name}
        onBlur={handleBlur('last_name')}
        onChange={handleChange('last_name')}
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
      <FormButton onPress={handleSubmit}/>
      <Text style={formStyles.formAnchorText}>
        Already registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLoginForm}>
          Log in!
        </Text>
      </Text>
    </View>
  );

};