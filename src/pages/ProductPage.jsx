import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const ProductPage = () => {
    const params = useParams();
    const [ product, setProduct ] = useState({});

    const token = sessionStorage.getItem("token");

    const getOneProduct = async() => {
     const getOneProduct = await fetch(`http://localhost:3001/api/products/${params.id}`);
     const data = await getOneProduct.json();
     setProduct(data.getProduct)
    };

    const addProdCart = () => {
      if(!token){
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto debes iniciar sesion",
          text: "Seras re dirigido a iniciar sesion",
        })
      
      setTimeout(() => {
        location.href= "/login";
      }, 3000);
    }else{
      Swal.fire({
        title: "Producto añadido al carrito",
        icon: "success"
      })}
    };

    const addProdFav = () => {
      if(!token){
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto debes iniciar sesion",
          text: "Seras re dirigido a iniciar sesion",
        })
      
      setTimeout(() => {
        location.href= "/login";
      }, 3000);
    }else{
      Swal.fire({
        title: "Producto añadido a favoritos",
        icon: "success"
      })}
    };

    useEffect(() => {
     getOneProduct()
    }, [])


  return (
    <>
    <Container>
        <Row>
            <Col>
            <img src={product.imagen} alt="" />
            </Col>
            <Col>
            <p>{product.titulo}</p>
            <p>{product.precio}</p>
            <div>
              <Button variant='success' className='mx-2' onClick={addProdCart}>
                Añadir al carrito</Button>
              <Button variant='danger' onClick={addProdFav}>
                Añadir a Favoritos</Button>
            </div>
            </Col>
        </Row>
    </Container>
    
    </>
  );
};

export default ProductPage;