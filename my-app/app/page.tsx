"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Instagram } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

const iconStyle = { color: 'white', fontSize: '2em' }; // Adjust fontSize to make the icon larger

const TopMenu = () => (
  <Navbar expand="lg" bg="light" className="fixed-top bg-gradient">
    <Container>
      <Row className="w-100">
        <Col className="d-flex justify-content-start">
          <Nav.Link href="#"><Instagram style={iconStyle} /></Nav.Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Nav.Link href="#">
            <Image src="/images/The_Boardroom_Logo.png" alt="The Boardroom Logo" width="70" />
          </Nav.Link>
        </Col>
        <Col className="d-flex justify-content-end">
          <Nav.Link href="#">
            <button className="btn btn-dark">Menu</button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

const CenterImage = () => (
  <Container className="d-flex justify-content-center align-items-center mt-5 p-5" id="content" style={{ height: 'calc(100vh - 160px)' }}>
    <Image src="/images/The_Boardroom_Logo.png" alt="The Boardroom Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
  </Container>
);

const BottomFooter = () => (
  <footer className="mt-auto bg-light fixed-bottom py-3">
    <Container>
      <Row>
        <Col>
          <h3>Hours</h3>
          Wednesday - Thursday 5pm – 10pm<br />
          Friday - Saturday 5pm – 11pm<br />
          Sunday Brunch 10am - 2pm
        </Col>
        <Col>
          <h3>Stay Connected</h3>
          <u>Instagram</u><br />
          <u>Contact</u><br />
          <u>Gift Cards</u><br />
          <u>Reservations</u>
        </Col>
        <Col></Col>
        <Col>
          <h3>THE BOARDROOM</h3>
          44 Kainehe St.<br />
          Kailua, HI 96734<br /><br />
          (808) 807-5640
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <Container fluid id="main-container">
      <TopMenu />
      <CenterImage />
      <BottomFooter />
    </Container>
  );
}
