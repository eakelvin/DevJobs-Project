import React, { useEffect } from 'react'
import Header from '../Components/Header';
import Form from '../Components/Form';
import Map from '../Components/Map';
import { useState } from 'react';
import LoadButton from '../Components/LoadButton';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState([]);
  const [items, setItems] = useState(12);

  const loadMore = () => {
    setItems(items + 12)
  }

  return (
    <div>
      <Header />
      <Form jobs={jobs} setJobs={setJobs} setSearch={setSearch} />
      <Map jobs={jobs} setJobs={setJobs} search={search} setSearch={setSearch} items={items}  />
      <LoadButton search={search} loadMore={loadMore} items={items} />
    </div>
  )
}

export default Home
