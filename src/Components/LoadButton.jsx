import React from 'react'
import Button from 'react-bootstrap/Button';

function LoadButton({ loadMore, items, search }) {
  return (
    <>
    {
        items < search.length && (
            <div className='p-5 d-flex justify-content-center'>
                <Button
                    onClick={loadMore} 
                    className='btn' 
                    style={{backgroundColor: "#5964E0"}} 
                    variant="primary" 
                    size="lg">
                    Load More
                </Button>
            </div>
        )
    }
    
    </>
  )
}

export default LoadButton
