
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx'
import { Col, Container, Row } from 'react-bootstrap';
import Skills from './components/Skills';
import Footer from './components/Footer.jsx';
import Resume from './components/Resume.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Resume />
      <Skills />
      <Footer />
    </>
  )
}

export default App
