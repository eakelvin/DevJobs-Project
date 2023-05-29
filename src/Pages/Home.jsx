import React, { useEffect } from 'react'
import Header from '../Components/Header';
import Form from '../Components/Form';
import Map from '../Components/Map';
import { useState } from 'react';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div>
      <Header />
      <Form jobs={jobs} setJobs={setJobs} setSearch={setSearch} />
      <Map jobs={jobs} setJobs={setJobs} search={search} setSearch={setSearch} />  
    </div>
  )
}

export default Home
