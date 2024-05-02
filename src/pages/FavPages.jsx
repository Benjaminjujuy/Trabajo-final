import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import clienteAxios, { configHeaders } from '../helper/ClientAxios';

const FavPages = () => {
  const [ favoritos, setFavoritos ] = useState([])

  const getAllFav = async() => {
  try {
    const favs = await clienteAxios.get(`/fav`, configHeaders);
    setFavoritos(favs.data.getFavs[0].favoritos);
  } catch (error) {
    console.log(error)
  }
  };

useEffect(() => {
 getAllFav();
},[]);


  return (
    <>
       {favoritos.map((fav) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fav.imagen}/>
        <Card.Body>
          <Card.Title>{fav.titulo}</Card.Title>
          <Card.Text>
          {fav.precio}
          </Card.Text>
          <Button variant="danger">Eliminar</Button>
        </Card.Body>
      </Card>
       ))}
    </>
  );
};

export default FavPages;