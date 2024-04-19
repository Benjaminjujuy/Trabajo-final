import { Container, Row, Nav, Col } from "react-bootstrap";
import ImagenesC from "./ImagenesC";
import "../css/FooterC.css";
import { useState } from "react";


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
                <Nav.Link href="#home">Facebook</Nav.Link>
                <Nav.Link href="#link">Instagram</Nav.Link>
                <Nav.Link href="#link">Youtube</Nav.Link>
                </Col>
                <Col>
                <Nav.Link href="#home">Trabaja con nosotros</Nav.Link>
                <Nav.Link href="#link">Terminos y condiciones
                </Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                </Col>
                <Col>
                 <iframe src="" frameborder="0"></iframe>
                </Col>
            </Row>
        </Container>
    </footer>
      )}
    </>
  )
}

export default FooterC;