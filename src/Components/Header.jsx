import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContextConsumer } from './ThemeContext';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <Navbar className='back' variant='dark'>
        <Container className='p-5'>
          <Link to="/">
            <Navbar.Brand className='mx-3'>DevJobs</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <div className="d-flex align-items-center mx-5">
                  <img src='./assets/desktop/icon-sun.svg' />
                  <Form>
                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label=""
                      onClick={context.toggleTheme}
                      style={{cursor: "pointer"}}

                    />
  
                  </Form>
                  <img src="./assets/desktop/icon-moon.svg" alt="" />
            </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      )}
    
    </ThemeContextConsumer>
  );
}

export default Header;