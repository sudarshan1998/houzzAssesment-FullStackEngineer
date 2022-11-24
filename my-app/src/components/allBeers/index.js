import { CRow, CCol } from '@coreui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import BeerItem from "../beerItem"
import "./index.css"

const AllBeers = () => {
  const [page, setPage] = useState(1);
  const [beerInfo, setBeerInfo] = useState([]);
  const getAllBeers = async () => {
    try {
      let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;
      const res = await fetch(url);
      const data = await res.json();
      setBeerInfo(data);
    } catch (e) {
      alert(`Beer not found.`)
      console.log(e);
    }
  };
  
  useEffect(() => {
    getAllBeers();
  }, [page]);

return (
  <>
    <CRow>{
        beerInfo.map(beer => {
          return <CCol lg={6} md={12}><BeerItem name={beer.name} tagline={beer.tagline} description={beer.description} image={beer.image_url} ingredients={Object.keys(beer.ingredients).join(", ")}/></CCol>
        })
      }
    </CRow>
    <Button variant="primary" className="loadMore" onClick={() => {
      setPage(page + 1)
    }}>Load More</Button>
    <p></p>
    </>
  )
}

export default AllBeers