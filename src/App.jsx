import { useFormik } from 'formik';
import './App.css';
import { NMSButton } from './components/Input/Button/Button';
import { FormikTextfield } from './components/Input/FormikTextfield/FormikTextfield';
import { NMSCheckbox } from './components';
import { Button } from '@mui/material';

export const App = () => {
  const formik = useFormik({
    initialValues: {
      readOnly: 'Read Only',
      firstName: '',
      middleName: '',
      lastName: '',
      email: ''
    }
  });

  return (
    <div>

      <NMSButton>MODE</NMSButton>
      <Button>hehe</Button>
      <FormikTextfield
        fieldchange={(field, value) => formik.setFieldValue(field, value)}
        field={'text'}
        fieldval={formik.values.text}
        err={formik.errors?.text ? true : false}
        helpertxt={formik.errors?.text}
        placeholder={'Username'}
      />
      <NMSCheckbox />
      <NMSCheckbox disabled />
    </div >
  );
};

export default App;
  