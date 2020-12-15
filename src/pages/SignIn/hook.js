import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { signIn } from '../../store/session/actions';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.session);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(signIn(values));
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
