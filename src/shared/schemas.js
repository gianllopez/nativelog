import * as Yup from 'yup';

const username = Yup.string().lowercase().min(6).max(12),
password = Yup.string().min(8);

export const LogupSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string(),
  email: Yup.string().email(),
  username, password
}).required();

export const LoginSchema = Yup.object().shape({
  username, password
}).required();