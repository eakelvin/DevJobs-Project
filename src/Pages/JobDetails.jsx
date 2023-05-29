import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { ThemeContextConsumer } from '../Components/ThemeContext'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import context from 'react-bootstrap/esm/AccordionContext'

function JobDetails() {
  const {jobid} = useParams()
  const jobId = parseInt(jobid)
  const thisJob = data.find(job => job.id === jobId)
  

  return (
    <ThemeContextConsumer>
      {context => (
        <>
      <Header />

        

       
      <Container className='d-flex justify-content-center'>
        <div style={{height: "120px", width: "60%"}} className="border border-2  row align-items-start text-center position-absolute top-40 start-50 translate-middle bg-light">
          <div
            style={{backgroundColor: `${thisJob.logoBackground}`}}
            className='col-sm-3 col-md-3 d-flex flex-row h-100 border-end'
          >
            <img src={thisJob.logo} />
          </div>
     
          <div className={`col-sm-9 col-md-9 h-100 bg-${context.theme}`}>
            <span className='d-flex justify-content-between'>

              <div className={`flex-column mt-4 text-${context.theme === "light" ? "dark" : "light"}`}>
              <h3 className='d-flex justify-content-start'>{thisJob.company}</h3>
              <span>{thisJob.website}</span>
              </div>
              
              <div className='mt-4'>
                <Button variant="primary" size="lg">Company Site</Button>
              </div>

            </span>
          </div>
                  
        </div>      
      </Container>

      <Container className='mt-5 p-5 d-flex justify-content-center'>
        <div style={{width: "73%"}} className='border border-2 p-3'>

        <div className='d-flex justify-content-between pt-2'>
          <div className=''>
            <Card.Link className='text-muted' href="#">{thisJob.postedAt}</Card.Link>*
            <Card.Link className='text-muted' href="#">{thisJob.contract}</Card.Link>
            <Card.Title className={`fw-bold mt-2 text-${context.theme === "light" ? "dark" : "light"}`}>{thisJob.position}</Card.Title>
            <Card.Text className='fw-bold purple mt-2'>{thisJob.location}</Card.Text>
          </div>
          
          <div className='mt-4'>
            <Button variant="primary" size="lg">
              Apply Now
            </Button>
          </div>
        </div>

        <div className={`mt-5 text-${context.theme === "light" ? "dark" : "light"}`}>
            <p>{thisJob.description}</p>
        </div>

        <div className={`mt-5 text-${context.theme === "light" ? "dark" : "light"}`}>
          <h2 className='fw-bold'>Requirements</h2>
          <p className='mt-3'>{thisJob.requirements.content}</p>
          <ul className='p-3'>
            <li>{thisJob.requirements.items[0]}</li>
            <li>{thisJob.requirements.items[1]}</li>
            <li>{thisJob.requirements.items[2]}</li>
            <li>{thisJob.requirements.items[3]}</li>
          </ul>
        </div>

        <div className={`mt-5 text-${context.theme === "light" ? "dark" : "light"}`}>
          <h3 className='fw-bold mb-3'>What You Will Do</h3>
          <p>{thisJob.role.content}</p>
          <ol className='p-3'>
            <li>{thisJob.role.items[0]}</li>
            <li>{thisJob.role.items[1]}</li>
            <li>{thisJob.role.items[2]}</li>
            <li>{thisJob.role.items[3]}</li>
          </ol>

        </div>
      
        </div>
      </Container>

      <Container fluid className={`bg-${context.theme}`}>
        <div className='d-flex justify-content-around p-3'>
        <div className={`text-${context.theme === "light" ? "dark" : "light"}`}>
          <Card.Title className="fw-bold mt-2">{thisJob.position}</Card.Title>
          <span>So Digital Inc</span>
        </div>

        <div>
          <Button variant="primary" size="lg">
              Apply Now
           </Button>
        </div>
        </div>
        
      </Container>
      </>
       )}
      </ThemeContextConsumer>
  )
}

export default JobDetails
