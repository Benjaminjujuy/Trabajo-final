import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert2';


const RegisterPage = () => {
 const [ formValues, setFormValues ] = useState({
  user: "",
  email: "",
  pass: "",
  rpass: "",
 });

 const handleChange = (ev) => {
  setFormValues({...formValues, [ev.target.name]: ev.target.value });
 };

 const handleClick = async(ev) =>{
  ev.preventDefault();
  const { user, email, pass, rpass } = formValues
  if(!user || !email || !pass || !rpass) {
  swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Algun campo esta vacio",
  });
  }else if(pass === rpass){
    const enviarForm = await fetch("http://localhost:3001/api/users", {
      method:"POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify({
      nombreUsuario: user,
      emailUsuario: email,
      contrasenia: pass
      })
    })

    const data = await enviarForm.json()
  }else{
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñias no coinciden",
    })
  }
 };

  return (
   <>
   <div className='text-center my-5'>REGISTER PAGE</div>
   <div className='d-flex justify-content-center my-5'>
   <Form className='w-25'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control 
        type="text" 
        name='user'
        value={formValues.user} 
        onChange={handleChange}
        placeholder="Ej: Usuario123" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email del usuario</Form.Label>
        <Form.Control
         type="text" 
         name='email'
         value={formValues.email} 
         onChange={handleChange}
         placeholder="Ej: mail@dominio.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contrasenia</Form.Label>
        <Form.Control 
        name='pass'
        value={formValues.pass} 
        onChange={handleChange}
        type="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repetir contrasenia</Form.Label>
        <Form.Control 
        name='rpass'
        value={formValues.rpass}
        onChange={handleChange}
         type="password" />
      </Form.Group>

      <div className='d-flex justify-content-center'>
      <Button variant="success" type="submit" onClick={handleClick}>
        Enviar formulario
      </Button>
      </div>
    </Form>
   </div>

   </>
  )
}

export default RegisterPage;