import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { useFormik } from 'formik';
import { AuthContext } from '../../../../App';
import { LogupSchema } from '../../../shared/schemas';
import { capitalize } from '../../../shared/utils';
import { Field, FormButton } from '../../../shared/components';
import { post } from '../../../services/api';
import { formStyles } from '../styles';

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
    if (isValid) {
      let { errors, response } = await post('/logup', data);
      if (errors) setErrors(errors);
      else await writeToken(response.token);
    };
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    setErrors,
    isSubmitting
  } = useFormik({
    initialValues: INITIAL_FORM,
    validationSchema: LogupSchema,
    onSubmit: submitHandler
  });

  const fieldProps = name => ({
    placeholder: capitalize(name),
    value: values[name],
    error: errors[name],
    touched: touched[name],
    onBlur: handleBlur(name),
    onChange: handleChange(name)
  });

  return (
    <View style={formStyles.form}>
      <Image source={logupIcon} style={formStyles.formImage}/>
      <Text style={formStyles.formText}>
        Fill the form to continue
      </Text>
      <Field
        {...fieldProps('full_name')}
        pattern={/(?!.*\s{2})^[a-zA-Z\s]+$/}
      />
      <Field {...fieldProps('email')}/>
      <Field
        {...fieldProps('username')}
        pattern={/^[a-z0-9_]*$/}
      />
      <Field {...fieldProps('password')}/>
      <FormButton
        onPress={handleSubmit}
        disabled={!isValid}
        isLoading={isSubmitting}
      />
      <Text style={formStyles.formAnchorText}>
        Already registered? {''}
        <Text style={formStyles.formAnchor} onPress={toLoginForm}>
          Log in!
        </Text>
      </Text>
    </View>
  );

};