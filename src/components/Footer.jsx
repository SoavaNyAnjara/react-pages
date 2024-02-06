import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    const date = new Date().getFullYear(); 

    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {date} Soava Ny Anjara</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer