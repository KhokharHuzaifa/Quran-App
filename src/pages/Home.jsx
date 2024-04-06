import React from 'react'
import SurahCard from '../components/SurahCard';

function Home() {
  return (
  <div className='container'>
          <center className='mt-4 mt-md-5'>
              <h1 className='title'><span style={{ color: 'rgb(177, 144, 31)' }}>Quran</span><span style={{ color: 'rgb(131, 131, 131)' }}> App</span></h1>
          </center>
          <SurahCard />
  </div>
  )
}

export default Home
