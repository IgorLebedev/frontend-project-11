import * as Yup from 'yup';

export default (url, stateUrls) => {
  const schema = Yup
    .string()
    .url('Incorrect Url')
    .notOneOf(stateUrls, 'Already Exists')
    .required('Empty field');
  return schema.validate(url);
};
