import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { ThemeContextConsumer } from './ThemeContext';

function FormGroup(props) {

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        fulltime: false
    })

    function handleChange (event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : type === "checkbox" ? checked : value
            }
            
        })  
    }

    function handleSubmit(event) {
        event.preventDefault()

         // if (formData === "") {
        //     return props.setSearch(jobs)
        // }
        // else {
        //     const filteredData = props.jobs.filter((item) => {
        //         return item.position.toLowerCase().includes(formData.title.toLowerCase()) && item.location.toLowerCase().includes(formData.location.toLowerCase()) && item.contract.includes(formData.fulltime)
        //     })
        //     props.setSearch(filteredData)
        //     console.log(formData);
        // }

        // const filteredData = props.jobs.filter((item) => {
        //     return item.position.toLowerCase().includes(formData.title.toLowerCase()) && item.location.toLowerCase().includes(formData.location.toLowerCase()) && item.contract.includes(formData.fulltime)
        //   })

        // props.setSearch(filteredData)

        const filteredJobs = props.jobs.filter(job => {
            if (formData.title && !job.position.toLowerCase().includes(formData.title.toLowerCase())) {
              return false;
            }
          
            if (formData.location && !job.location.toLowerCase().includes(formData.location.toLowerCase())) {
              return false;
            }
          
            if (formData.fulltime && job.contract !== "Full Time") {
              return false;
            }
          
            return true;
          });
          
        props.setSearch(filteredJobs);
        console.log(formData);
        
        setFormData({
            title: "",
            location: "",
            fulltime: false
        })
    }
  
  return (
    <ThemeContextConsumer>
        {context => (
            <Form onSubmit={handleSubmit}>
             <Container>
             <div style={{height: "80px", width: "75%"}} className={`border border-2  row align-items-start text-center position-absolute top-40 start-50 translate-middle bg-${context.theme}`}>
                 
                 <div className='col-sm-3 col-md-3 col-lg-4 d-flex flex-row border-end h-100'>
                     <Form.Label><img className='mt-4 d-none d-sm-block' src='./assets/desktop/icon-search.svg' /></Form.Label>
                     <Form.Control className={`border border-0 bg-${context.theme}`}
                                    onChange={handleChange}
                                    name='title'
                                    value={formData.title} 
                                    type="text" 
                                    placeholder="Filter by title, companies, expertise..." />
                     <img className='size d-block d-sm-none mt-4 mx-3' src="./assets/mobile/icon-filter.svg" alt="" />
                     <div style={{backgroundColor: "#5964E0", height:"50px"}} className='mt-3 p-3 rounded-3 d-block d-sm-none'>
                         <BsSearch className='mb-5' color='white' size={25} />
                     </div>
                     
                  </div>
                     
     
                 <div className='col-sm-4 col-md-4 col-lg-3 d-none d-sm-block border-end h-100'>
                     <span className='d-flex flex-row p-2'>
                     <Form.Label><img className='mt-4 mx-1' src='./assets/desktop/icon-location.svg' /></Form.Label>
                     <Form.Control className={`border border-0 mt-2 bg-${context.theme}`} 
                                    type='text'
                                    name='location'
                                    value={formData.location}
                                    onChange={handleChange} 
                                    placeholder='Filter by Location...'></Form.Control>
                     </span>
                 </div>
     
                 <div className="col-sm-4 col-md-5 d-none d-sm-block h-100">
                     <span className='d-flex flex-row'>
                     <div className="form-check checkbox-xl mt-4 ms-3">
                         <input style={{backgroundColor: "#9DAEC2"}} className="form-check-input" 
                                type="checkbox" 
                                name="fulltime"
                                checked={formData.fulltime}
                                onChange={handleChange} 
                                id="checkbox-3" />
                         <label className={`form-check-label fw-bold d-none d-lg-block text-${context.theme === "light" ? "dark" : "light"}`}htmlFor="checkbox-3">Full Time Only</label>
                     </div>
                     <span className={`ft mt-4 d-lg-none text-${context.theme === "light" ? "dark" : "light"}`}>Full </span>
                     <span className={`ft mt-4 ms-1 d-lg-none text-${context.theme === "light" ? "dark" : "light"}`}> Time</span>
                     
     
                     <div className='mt-3 ms-auto'>
                         <Button type='submit' className='d-sm-none d-md-block' style={{backgroundColor: "#5964E0"}} variant='' size='lg'>Search</Button>
                         <Button type='submit' className='d-none d-sm-block d-md-none ms-3 mt-2' style={{backgroundColor: "#5964E0"}} variant='' size='sm'>Search</Button>
                     </div>
                     </span>
                 </div>
                  
             </div>      
         </Container>
         </Form>

        )}
   
    </ThemeContextConsumer>

    
  );
}

export default FormGroup;