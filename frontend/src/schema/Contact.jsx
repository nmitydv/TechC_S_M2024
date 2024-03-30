import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
  issue: Yup.string().required('Issue is required'),
  problem: Yup.string().required('Problem is required'),
  requestCallback: Yup.boolean(),
 
});
