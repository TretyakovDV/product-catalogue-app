import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

export const useSignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
  });

  return {
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    errors: formik.errors,
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
