import React, { useContext } from 'react';
import { AsyncStorage, Image, Text, View } from 'react-native';
import { useFormik } from 'formik';
import { LogupSchema } from '../../../shared/schemas';
import { Field, FormButton } from '../../../shared/components';
import { formStyles } from '../styles';
import { post } from '../../../services/api';
import { AuthContext } from '../../../../App';

const logupIcon = require('../../../assets/logup-icon.png');

const INITIAL_FORM = {
  full_name: '',
  email: '',
  username: '',
  password: ''
};

export function Logup({ navigation }) {

  const { writeToken } = useContext(AuthContext);

  const toLoginForm = () => { navigation.navigate('login') };

  const submitHandler = async data => {
    let { errors, response } = await post('/logup', data);
    if (errors) setErrors(errors);
    else await writeToken(response.token);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    setErrors
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