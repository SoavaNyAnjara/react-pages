import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustumBtn from './CustumBtn'

const Resume = () => {
    return (
        <Container fluid="md mt-4">
            <Row className='mt-5 p-5'>
                <Col className='mt-5 p-5 text-center' fluid="md" >
                    <img
                        src='./developper.png'
                        width='300'
                        height='300'
                        className='d-inline-block align-top'
                        alt='developper'
                    />
                </Col>
                <Col className="text-right ml-auto">
                    <div className='mt-5 p-5'>
                        <h3>👋 Bonjour, je suis</h3>
                        <h1 className='mt-5'>Soava RAKOTOMANANA</h1>
                        <h5 className='mt-3'>concepteur et développeur d'applications numériques</h5>
                    </div>
                    <CustumBtn lien='https://www.linkedin.com/in/soava-rakotomanana-37780b17b/' >
                        <img src='./Linkedin.png'
                            width={'20px'}
                            bg='light'
                            variant='light'
                            alt='LinkedIn'
                        />
                        LinkedIn
                    </CustumBtn>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume