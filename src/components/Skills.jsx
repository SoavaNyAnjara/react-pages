import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'


const Skills = () => {
  const titres = ['Backend', 'Frontend', 'Base de données', 'Autres'];
  const backend = {
    titre: 'Backend', 
    stack:'Springboot'
  };
  const frontend = {
    titre: 'Frontend', 
    stack:'React'
  };
  const bd = {
    titre: 'Base de données', 
    stack:'MySql, PostgreSql'
  }
  const other = {
    titre: 'Autres',
    stack:'UML, Méthode Agile SCRUM'
  }

  return (
    <Container fluid="md mt-4">
      <Row className="justify-content-center">
        <Col lg='12' className="text-center">
          <h2 >Compétences</h2>
        </Col>
      </Row>

      <Row className="mt-4">
        {
          titres.map((title, index) => (
            <Col key={index} lg='3'>
              <Card  >
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  {title === backend.titre ? (<Card.Text>{backend.stack}
                  </Card.Text>) : title === frontend.titre ? (<Card.Text>{frontend.stack}
                  </Card.Text>) : title === bd.titre ? (<Card.Text>{bd.stack}
                  </Card.Text>) : (<Card.Text>{other.stack}
                  </Card.Text>)
                    
                  }
                  
                </Card.Body>
              </Card>
            </Col>
          ))
        }



      </Row>
    </Container>
  )
}

export default Skills