import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/NavbarC.css";
import ImagenesC from './ImagenesC';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { configHeaders } from '../helper/ClientAxios';



const NavbarC = () => {
  const [show, setShow] = useState(false);
  const [newProduct, setNewProduct] = useState({
    titulo: "",
    precio: 0,
    codigo: "",
    imagen: "",
  });
  const token = sessionStorage.getItem("token")|| "";
  const role = sessionStorage.getItem("role")|| "";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const signOff = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    setTimeout (() => {
    location.href="/"
    }, 1000);
  };

  const handleChange = (ev) => {
      setNewProduct({...newProduct, [ev.target.name]: ev.target.value});
    };

  const handleClick = async(ev) => {
    try {
      ev.preventDefault()
      const { titulo, precio, codigo, imagen } = newProduct;

      if(!titulo || !precio || !codigo || !imagen ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algun campo esta vacio",
        });
      } else {
        const data = new FormData()
        data.append(`imagen`, newProduct.imagen)

        const createProd = await clienteAxios.post(`/products`, newProduct, configHeaders)

        if(createProd.status === 201) {
          Swal.fire({
            title: "Producto creado con exito",
            icon: "success"
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
    
  return (
    <>
    <Navbar expand="lg" className="bg-navbar-principal">
    <Container fluid>
      <Navbar.Brand href={
        token && role === "user" ? "/user" :
        token && role === "admin" ? "/admin" :
         "/"
      }>
        <ImagenesC url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg0vALj7wnJ-W6SbdUr7vhA278f3BPsMnQQ&s"}
         alt={"Logo de la empresa"} 
         width={"50"}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to=
          { token && role === "user" ? "/user" :
           token && role === "admin" ? "/admin" :
            "/"} 
            className={"nav-link"}> 
            Inicio
          </NavLink>
         {
          token && role === "user"? (
            <>
            <NavLink to="#link">Sobre Nosotros</NavLink>
            <NavLink to="#link" >Contacto</NavLink>
            <NavLink to="#link" >Favoritos</NavLink>
            <NavLink to="#link" >Carrito</NavLink>
            </> )
        :
          token && role === "admin"? (
            <>
            <NavLink to="/admin-users" >Usuarios</NavLink>
            <NavLink to="/admin-products" >Productos</NavLink>
            <Button variant="success" onClick={handleShow} className='clase-btn'>
              Crear producto 
            </Button>

           <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
           <Modal.Title>Crear producto</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Titulo</Form.Label>
           <Form.Control type="text"
            placeholder="EJ: Titulo1"
            value={newProduct.titulo}
            onChange={handleChange}
            name='titulo'/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Precio</Form.Label>
           <Form.Control type="number"
            placeholder="EJ: $1000" 
            value={newProduct.precio}
            onChange={handleChange}
            name='precio'/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Codigo</Form.Label>
           <Form.Control type="text"
            placeholder="EJ: ghg4bg1d4ggf"
            value={newProduct.codigo}
            onChange={handleChange}
            name='codigo'/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Imagen</Form.Label>
           <Form.Control type="file"
            value={newProduct.imagen}
            onChange={handleChange}
            name='imagen'/>
           </Form.Group>

           <div className='d-flex justify-content-center'> 
           <Button variant="success"
            type="submit" 
            onClick={handleClick}>
              Enviar formulario
           </Button>
           </div>

           </Form>
           </Modal.Body>
           </Modal>
          </>
          )
        :
          (
          <>
          <NavLink to="#link" className={"nav-link"}>Sobre Nosotros</NavLink>
          <NavLink to="#link" className={"nav-link"}>Contacto</NavLink>
          </>
          )
         }
        </Nav>
        {token && role ? (
          <Nav className="ms-auto">
          <NavLink to="#" onClick={signOff}>Cerrar Sesion</NavLink>
        </Nav>
        ) : (
          <Nav className="ms-auto">
          <NavLink to="/login" className={"nav-link"}>
            Iniciar Sesion
          </NavLink>
          <NavLink to="/register" className={"nav-link"}>
            Registrarse
          </NavLink>
        </Nav>
        )};
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )}

export default NavbarC;