import { Container, Row, Nav, Col } from "react-bootstrap";
import ImagenesC from "./ImagenesC";
import "../css/FooterC.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const FooterC = () => {
  const [userAdmin, setUserAdmin] = useState(false);
  return (
    <>
      {!userAdmin && (
        <footer className="bg-navbar-principal p-5">
        <Container>
            <Row>
                <Col>
                <ImagenesC url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg0vALj7wnJ-W6SbdUr7vhA278f3BPsMnQQ&s"}
                 alt={"Logo de la empresa"} 
                 width={"150"}/>
                </Col>
                <Col>
                <NavLink to="#home" className={"nav-link"}>Facebook</NavLink>
                <NavLink to="#home"className={"nav-link"}>Instagram</NavLink>
                <NavLink to="#home"className={"nav-link"}>Youtube</NavLink>
                </Col>
                <Col>
                <NavLink to="#home"className={"nav-link"}>Trabaja con nosotros</NavLink>
                <NavLink to="#link"className={"nav-link"}>Terminos y condiciones</NavLink>
                <NavLink to="#link"className={"nav-link"}>Contacto</NavLink>
                </Col>
                <Col>
                 <iframe src="" /*frameborder="0"*/></iframe>
                </Col>
            </Row>
        </Container>
    </footer>
      )}
    </>
  )
}

export default FooterC;