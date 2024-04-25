import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CardsC from '../components/CardsC';
import CarrouselC from '../components/CarrouselC';
import clienteAxios from '../helper/ClientAxios';


const HomePage = () => {
   const [products, setProducts] = useState([])
   
   const getProducts = async () => {
    const allProducts = await clienteAxios.get("/products");
    setProducts(allProducts.data.getAllProducts);
   };

   useEffect(() => {
     getProducts()
   }, []);


  return (
  <>
   <CarrouselC />
     <Container>
            <Row>
               {products.map((product) =>(
                  <Col sm={"12"} md={"6"} lg={"4"} className='my-3'>
                  <CardsC 
                  url={product.imagen}
                  titulo={product.titulo}
                  descripcion={product.precio}
                  idProduct={product._id}
                  />
               </Col>
               ))};
            </Row>
     </Container>
  </>
  );};

export default HomePage;