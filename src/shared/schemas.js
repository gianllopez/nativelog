import * as Yup from 'yup';

const username = Yup.string().label('Username').lowercase().min(6).max(12).required(),
password = Yup.string().min(8).label('Password').required();

export const LogupSchema = Yup.object().shape({
  first_name: Yup.string().label('First name').required(),
  last_name: Yup.string().label('Last name').required(),
  email: Yup.string().email('Email is invalid'),
  username, password
});

export const LoginSchema = Yup.object().shape({
  username, password
});