import React, { useEffect } from 'react'
import Header from '../Components/Header';
import Form from '../Components/Form';
import Map from '../Components/Map';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div>
      <Header />
      <Form jobs={jobs} setJobs={setJobs} setSearch={setSearch} />
      <Map jobs={jobs} setJobs={setJobs} search={search} setSearch={setSearch} />

      <div className='p-5 d-flex justify-content-center'>
        <Button className='btn' style={{backgroundColor: "#5964E0"}} variant="primary" size="lg">
            Load More
        </Button>
      </div>
        
    </div>
  )
}

export default Home
