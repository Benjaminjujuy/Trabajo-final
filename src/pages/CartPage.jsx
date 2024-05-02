import { useEffect, useState } from 'react'
import clienteAxios, { configHeaders } from '../helper/ClientAxios';
import Table from 'react-bootstrap/Table';

const CartPage = () => {
    const [ carrito, setCarrito ] = useState([]);

    const getProdCart = async () => {
     const carts = await clienteAxios.get(`/carts`, configHeaders);
     setCarrito(carts.data.getCarts[0].productos);
    }

    useEffect(() => {
     getProdCart();
    },[]);

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Codigo</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            {
            carrito.map((cart) =>{
             <>
             <td>{cart.titulo}</td>
             <td>{cart.precio}</td>
             <td>{cart.codigo}</td>
             <td>
               <img src={cart.imagen} alt="" width={50}/> 
            </td> 
            </>
             })
            }  
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default CartPage;