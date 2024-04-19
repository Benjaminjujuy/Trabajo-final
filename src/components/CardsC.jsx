import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardsC = ({ url, titulo, descripcion, idProduct }) => {
  return (
    <>
      <Card>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text> {descripcion} </Card.Text>
        <Link to={`/product/${idProduct}`} className='btn btn-success'>Ver mas</Link>
      </Card.Body>
    </Card>
    </>
  );
};

export default CardsC;