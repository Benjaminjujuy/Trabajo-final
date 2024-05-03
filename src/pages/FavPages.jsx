import React, { useEffect, useState } from 'react'
import clienteAxios, { configHeaders } from '../helper/ClientAxios';
import CardsC from '../components/CardsC';

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
      <CardsC 
      url={fav.imagen} 
      titulo={fav.titulo} 
      descripcion={fav.precio} 
      idProduct={fav._id}
      key={fav._id} 
      idPage="FavPage"/>
       ))}
    </>
  );
};

export default FavPages;