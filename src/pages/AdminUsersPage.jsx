import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

const AdminUsersPage = () => {
    const [ users, setUsers ] = useState([]);
    const [show, setShow] = useState(false);
    const [userState, setUserState] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (idUser) => {
      setShow(true);
      const userFind = users.find((user) => user._id === idUser);
      setUserState(userFind);
    };

    const getAllUsers = async() =>{
        const getUsers = await fetch("http://localhost:3001/api/users");
        const data = await getUsers.json();
        setUsers(data.getAllUsers);
    };

    const handleChage = (ev) => {
      setUserState({...userState, [ev.target.name]: ev.target.value});
    };

    const handleClick = async(ev) => {
      ev.preventDefault()
      const updateUser = await fetch(`http://localhost:3001/api/users/${userState._id}`, {
        method: `PUT`,
        headers: {
          "content-type" : "application/json"
        },
        body:JSON.stringify({
          nombreUsuario: userState.nombreUsuario,
          emailUsuario: userState.emailUsuario,
          role: userState.role,
        })
      });

      const data = await updateUser.json();
      if (data) {
        handleClose();
        Swal.fire({
          title: "Usuario actualizado con exito",
          icon: "success",
        })
      }
    };

    const deleteUser = async(idUser) => {

      const confirmDeleteUser = confirm("Estas seguro de que deseas eliminar este usuario?")

      if(confirmDeleteUser) {
        const delUser = await fetch(`http://localhost:3001/api/users/${idUser}`,{
          method: "DELETE",
          headers: {
            "content-type" : "application/json",
          },
        }
      )
        const data = await delUser.json()

        if(data){
          Swal.fire({
            title: "Usuario eliminado con exito",
            icon: "success",
          });
        }
      }
    };

    useEffect(() => {
        getAllUsers()
    }, [users])

  return (
    <>
    <div className='d-flex justify-content-center mt-3'>
    <Table striped bordered hover className='w-50'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Role</th>
          <th>Editar/eliminar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
         <tr key={user._id}>
            <td>{user.nombreUsuario}</td>
            <td>{user.emailUsuario}</td>
            <td>{user.role}</td>
        <td>
           <Button variant="warning" 
            onClick={() => handleShow(user._id)}>
             Editar
           </Button>

           <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
           <Modal.Title>Editar usuario</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
             type="text" 
             name='nombreUsuario'
             value={userState.nombreUsuario}
             onChange={handleChage}
             />
            </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Correo</Form.Label>
           <Form.Control
            type="text"
            name='emailUsuario' 
            value={userState.emailUsuario}
            onChange={handleChage}
            />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Role</Form.Label>
           <Form.Control
            type="text"
            name='role' 
            value={userState.role}
            onChange={handleChage}
            />
           </Form.Group>

           <Button variant="primary"
            type="submit"
            onClick={handleClick}>
              Guardar
           </Button>
           </Form>
          </Modal.Body>
           </Modal>
           <Button variant="danger" 
           className={user.role === "admin" && "d-none"}
           onClick={() => deleteUser(user._id)}>  
           Eliminar 
           </Button>
      </td>
        </tr>
            })};

    </tbody>
    </Table>
      </div>
    </>
  );
};

export default AdminUsersPage;