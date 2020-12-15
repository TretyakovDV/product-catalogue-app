import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../store/session/actions';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.session);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .max(8)
        .min(3)
        .required(),
      passwordConfirmation: yup
        .string()
        .max(8)
        .min(3)
        .oneOf([
          yup.ref('password'), null,
        ], 'Passwords must match')
        .required(),
    }),
    onSubmit: (values) => {
      dispatch(signUp(values, history));
    },
  });

  return {
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    errors: formik.errors,
    handleChange: formik.handleChange,
    isLoading,
  };
};

export const useStyles = makeStyles({
  form: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    '& .MuiTextField-root': {
      marginBottom: '10px',
    },
  },
});
