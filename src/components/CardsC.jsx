import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardsC = ({ url, titulo, descripcion, idProduct, idPage }) => {
  const deleteProdFav = () => {
    console.log("borrando")
  }
  return (
    <>
      <Card style={{width: "18rem"}}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text> {descripcion} </Card.Text>
         {idPage === "FavPage" ? (
          <Link to={`#`} className='btn btn-danger' onClick={deleteProdFav}>Eliminar</Link>
         ) : (
          <Link to={`/product/${idProduct}`} className='btn btn-success'>Ver mas</Link>
         )
         }

        
      </Card.Body>
    </Card>
    </>
  );
};

export default CardsC;