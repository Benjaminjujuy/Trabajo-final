import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import clienteAxios, { configHeaders } from '../helper/ClientAxios';

const LoginPage = () => {
    const [ formValues, setFormValues ] = useState({
        user:"",
        pass:"",
    });

const handleChange = (ev) => {
    setFormValues({...formValues, [ev.target.name]:ev.target.value})
};

const handleClick = async(ev) => {
    ev.preventDefault();
    const sendFormLogin = await clienteAxios.post("/users/login",{
      nombreUsuario:formValues.user,
      contrasenia:formValues.pass,
    },
     configHeaders
  );

  if(sendFormLogin.data.rol === `admin`){
    sessionStorage.setItem("token", sendFormLogin.token);
    sessionStorage.setItem("role", sendFormLogin.token);
    location.href = "/admin";
  }else{
    sessionStorage.setItem("token", sendFormLogin.token);
    sessionStorage.setItem("role", sendFormLogin.token);
    location.href = "/user";
  }   
};
  return (
    <>
 <div className='d-flex justify-content-center my-5'>
 <Form className='w-25'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
         type="text"
         name="user"
         value={formValues.user} 
         onChange={handleChange} 
         placeholder="Ej: usuario123"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseñia</Form.Label>
        <Form.Control
         type="password"
         name="pass"
         value={formValues.pass} 
         onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Iniciar sesion
      </Button>
    </Form>
 </div>

    </>
  )
}

export default LoginPage;