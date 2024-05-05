import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import clienteAxios from '../helper/ClientAxios';

const ProductPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [ product, setProduct ] = useState({});

    const token = sessionStorage.getItem("token");

    const getOneProduct = async() => {
      const getOneProduct = await clienteAxios.get(`/products/${params.id}`);
      setProduct(getOneProduct.data.getProduct)
    };

    const addProdCart = async() => {
    try {
      if(!token){
        Swal.fire({
          icon: "error",
          title: "Para añadir este producto debes iniciar sesion",
          text: "Seras re dirigido a iniciar sesion",
        })  
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }else{
      const usuario = await clienteAxios.get(`/users/${sessionStorage.getItem(`idUsuario`)}`)

      if(usuario.status === 200){
        const addProd = await clienteAxios.post(
          `/products/cart/${params.id}`); 

        if(addProd.status === 200){
          Swal.fire({
            title: "Producto añadido al carrito",
            icon: "success"
          })}
        }
      }
    } catch (error) {
      if(error.response.status === 400){
        swal.fire({
          icon: "error",
          title: error.response.data.msg,
        });
      }
    }
    };

    const addProdFav = async() => {
      try {
        if(!token){
          Swal.fire({
            icon: "error",
            title: "Para añadir este producto debes iniciar sesion",
            text: "Seras re dirigido a iniciar sesion",
          })
        
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }else{
        const usuario = await clienteAxios.get(`/users/${sessionStorage.getItem(`idUsuario`)}`)
  
        if(usuario.status === 200){
          const addProd = await clienteAxios.post(
            `/products/fav/${params.id}`);
  
          if(addProd.status === 200){
            Swal.fire({
              title: "Producto añadido a favoritos",
              icon: "success"
            })}
          }
        }
      } catch (error) {
        if(error.response.status === 400){
          swal.fire({
            icon: "error",
            title: error.response.data.msg,
          });
        }
      }
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