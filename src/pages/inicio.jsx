
import { Container, Row, Col, Button, Card, Accordion, Form } from 'react-bootstrap';
import '../css/inicio.css';

export const Inicio = () => {
  return (
    <div className="inicio">
      {/* Hero Section */}
      <section className="hero text-center">
        <Container>
          <h1>Tu <span className="vision">Visión Web</span> Hecha Realidad con Pasión y Creatividad</h1>
          <Button variant="primary" className="mt-3">Ver Servicios</Button>
        </Container>
      </section>

      {/* Servicios Section */}
      <section className="servicios py-5">
        <Container>
          <h2 className="text-center mb-4">Nuestros Servicios</h2>
          <Row>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Diseño Web</Card.Title>
                  <Card.Text>
                    Creamos sitios web impactantes y centrados en el usuario.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>UI/UX Design</Card.Title>
                  <Card.Text>
                    Diseñamos interfaces UX/UI excepcionales.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Diseño Responsivo</Card.Title>
                  <Card.Text>
                    Sitios que se adaptan a cualquier dispositivo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Web E-commerce</Card.Title>
                  <Card.Text>
                    Tiendas online listas para vender.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Dominio</Card.Title>
                  <Card.Text>
                    Te ayudamos con la compra de tu dominio.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Desarrollo Personalizado</Card.Title>
                  <Card.Text>
                    Creamos soluciones a medida para tus necesidades.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trabajos Section */}
      <section className="trabajos py-5">
        <Container>
          <h2 className="text-center mb-4">Nuestros Trabajos</h2>
          <Row className="text-center">
            <Col md={4}>
              <img src="/path/to/image1.jpg" alt="Trabajo 1" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src="/path/to/image2.jpg" alt="Trabajo 2" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src="/path/to/image3.jpg" alt="Trabajo 3" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Precios Section */}
      <section className="precios py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Precios</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Web E-commerce</Card.Title>
                  <Card.Text>
                    $690.000
                  </Card.Text>
                  <Button variant="primary">Contactar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq py-5">
        <Container>
          <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo puedo contactar al equipo de Meraki?</Accordion.Header>
              <Accordion.Body>
                Puedes contactarnos a través del formulario en esta página.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Qué servicios ofrecen?</Accordion.Header>
              <Accordion.Body>
                Ofrecemos una amplia gama de servicios web, incluyendo diseño, desarrollo, y más.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Brindan servicio de mantenimiento web?</Accordion.Header>
              <Accordion.Body>
                Sí, ofrecemos paquetes de mantenimiento para todos nuestros clientes.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      {/* Contacto Section */}
      <section className="contacto py-5">
        <Container>
          <h2 className="text-center mb-4">Contáctanos</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="ejemplo@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formNombre" className="mt-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre completo" />
            </Form.Group>
            <Form.Group controlId="formMensaje" className="mt-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Enviar</Button>
          </Form>
        </Container>
      </section>
    </div>
  );
}
