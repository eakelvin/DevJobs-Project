import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ThemeContextConsumer } from './ThemeContext';
import { Link } from 'react-router-dom';

function Body(props) {
  
  return (
    <ThemeContextConsumer>
      {context => (
         <Container className='mb-5 pt-4'>
        
         <Card className={`p-5 bg-${context.theme}`}>
           <Card.Body>
             <div
               style={{backgroundColor: `${props.logoBackground}`}} 
               className='position-absolute top-0 start-10 translate-middle rounded-3 d-flex align-items-center justify-content-center size p-4'>
               <img src={props.logo} />
             </div>
             <Card.Link className='text-muted' href="#">{props.postedAt}</Card.Link>
             <Card.Link className='text-muted' href="#">{props.contract}</Card.Link>
             <Link to={`/jobdetails/${props.id}`}>
              <Card.Title className={`fw-bold text-${context.theme === "light" ? "dark" : "light"}`}>{props.position}</Card.Title>
             </Link>
             
             <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
             <Card.Text className='fw-bold purple'>{props.location}</Card.Text>
           </Card.Body>
         </Card>
         
         </Container>

      )}
   
    </ThemeContextConsumer>
  );
}

export default Body;
