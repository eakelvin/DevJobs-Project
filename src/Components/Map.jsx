import React, { useState, useEffect } from 'react'
import data from '../data.json'
import Body from './Body'
import { Container} from 'react-bootstrap'

const Map = ({jobs, setJobs, search, setSearch, items}) => {

  useEffect(()=>{
    setJobs(data)
    setSearch(data)
      },[])

  const information = search.length === 0 ? (<h2>No Results Found</h2>) : 
  (search.slice(0, items).map((item) => {
    return <Body
        key={item.id}
        {...item} 
      />
  })
  )

  return (
    <Container>
      
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mt-5 pt-5'>
          {information} 
        </div>
      
    </Container>
    
  )
}

export default Map
