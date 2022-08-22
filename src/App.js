import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

function App() {

  const handleClickLogin =(values) => console.log(values)
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este Campo é Obrigatório"),
    password: yup.string().min(8, "A senha deve ter no minimo 8 caracteres").required("Este campo é obrigatório"),
  })


  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
      initialvalues={{}}
      onSubmit={handleClickLogin} 
      validationSchema={validationLogin}
      >
        <Form className="login=form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email"/>

            <ErrorMessage component="span" name="email" className="form-error"/>
          </div>

          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Password"/>

            <ErrorMessage component="span" name="password" className="form-error"/>
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
        

      </Formik>
    </div>
  );
}

export default App;
