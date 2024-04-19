import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    const sendFormLogin = await fetch("http://localhost3001/api/users/login",{
        method: "POST",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            nombreUsuario:formValues.user,
            contrasenia:formValues.pass
        })
    })

    const data = await sendFormLogin.json()

    if (data.role === "user") {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.token);
        location.href = "/user";
    }else {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.token);
        location.href = "/admin";
    }

}
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

export default LoginPage