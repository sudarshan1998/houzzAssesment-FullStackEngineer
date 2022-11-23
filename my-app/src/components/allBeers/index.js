import { CRow, CCol } from '@coreui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import BeerItem from "../beerItem"

const AllBeers = () => {
  const [beerInfo, setBeerInfo] = useState([]);
  const getAllBeers = async () => {
    try {
      let url = `https://api.punkapi.com/v2/beers?page=2&per_page=10`;
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
  }, []);

return (
    <CRow>{
        beerInfo.map(beer => {
          return <CCol lg={6} md={12} ><BeerItem name={beer.name} tagline={beer.tagline} description={beer.description} image={beer.image_url}/></CCol>
        })
      }
    </CRow>
  )
}

export default AllBeers