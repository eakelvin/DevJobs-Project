import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { ThemeContextConsumer } from '../Components/ThemeContext'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function JobDetails() {
  const {jobid} = useParams()
  const jobId = parseInt(jobid)
  const thisJob = data.find(job => job.id === jobId)
  

  return (
    <ThemeContextConsumer>
      {context => (
        <>
      <Header />

      <Container className='d-block d-sm-block d-md-none pb-5'>
        <div className='relative'>
          <div style={{width: "60%"}} className='mt-5 position-absolute top-60 start-50 translate-middle'>
        <Card className={`d-flex align-items-center justify-content-center p-3 bg-${context.theme}`}>
          <Card.Body>
             <div
               style={{backgroundColor: `${thisJob.logoBackground}`}} 
               className='position-absolute top-0 start-50 translate-middle rounded-3 d-flex align-items-center justify-content-center size'>
               <img src={thisJob.logo} />
             </div>
             <Card.Title className={`fw-bold text-center text-${context.theme === "light" ? "dark" : "light"}`}>{thisJob.company}</Card.Title>
             <Card.Link className='text-muted' href="#">{thisJob.website}</Card.Link>
          </Card.Body>
          <div>
            <Button style={{backgroundColor: "#5964E0"}} variant="primary" size="lg">
              Company Site
            </Button>
          </div>
          
        </Card>
        </div>
        </div>
      </Container>

      <Container className='d-flex justify-content-center d-none d-md-block'>
        <div style={{height: "120px", width: "60%"}} className="border border-2  row align-items-start text-center position-absolute top-40 start-50 translate-middle bg-light">
          <div
            style={{backgroundColor: `${thisJob.logoBackground}`}}
            className='col-sm-3 col-md-3 col-lg-2 d-flex flex-row h-100 border-end p-5'
          >
            <img src={thisJob.logo} />
          </div>
     
          <div className={`col-sm-9 col-md-9 col-lg-10 h-100 bg-${context.theme}`}>
            <span className='d-flex justify-content-between'>

              <div className={`flex-column mt-4 text-${context.theme === "light" ? "dark" : "light"}`}>
              <h3 className='d-flex justify-content-start'>{thisJob.company}</h3>
              <span>{thisJob.website}</span>
              </div>
              
              <div className='mt-5'>
                <Button className={`purple text-${context.theme === "light" ? "purple" : "light"} p-2 `} style={{backgroundColor: "#6E8098", color:"5964E0"}} size="sm">Company Site</Button>
              </div>

            </span>
          </div>
                  
        </div>      
      </Container>

      <Container className='mt-5 p-5 d-flex justify-content-center'>
        <div style={{width: "75%"}} className='border border-dark p-5'>

        <div className='d-flex justify-content-between'>
          <div className=''>
            <Card.Link className='text-muted' href="#">{thisJob.postedAt} <span className='fw-bold fs-1'>·</span>{thisJob.contract}</Card.Link>
            <Card.Title className={`fw-bold mt-1 text-${context.theme === "light" ? "dark" : "light"}`}>{thisJob.position}</Card.Title>
            <Card.Text className='fw-bold purple mt-2'>{thisJob.location}</Card.Text>
          </div>
          
          <div className='mt-5 d-none d-md-block'>
            <Button style={{backgroundColor: "#5964E0"}} variant="primary" size="sm">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="d-grid gap-2 d-block d-md-none mt-5">
            <Button style={{backgroundColor: "#5964E0"}} size="lg">
              Apply Now
            </Button>
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
          <Button style={{backgroundColor: "#5964E0"}} variant="primary" size="lg">
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
