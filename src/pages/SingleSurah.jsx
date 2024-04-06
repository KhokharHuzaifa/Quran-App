import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleSurahQuery } from '../redux/QuranApi'
import Navbar from '../components/Navbar'

function SurahDetail() {
  const { surahId } = useParams()
  const { data, isLoading } = useGetSingleSurahQuery(surahId)

  return (
    <div>
      <Navbar surahName={data?.data?.englishName} surahNameTrans={data?.data?.englishNameTranslation} totalAyah={data?.data?.numberOfAyahs} loading={isLoading}/>
      <center className='container'>
        {
          isLoading ? undefined : <>
            <div className='mt-5 pt-5'>
              <span>Surah no - <b>{data?.data?.number}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>No of ayahs - <b>{data?.data?.numberOfAyahs}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span><b>{data?.data?.revelationType}</b></span>
            </div>
            <h1 className='suraName mt-5 mb-5'>{data?.data?.name}</h1>
            <hr />
          </>
        }
        
      </center>
      {
        isLoading ? 
          <center className='mt-5 pt-5'>
            <div className="loadingio-spinner-gear-yzaezf3dcmj mt-5"><div className="ldio-rurz9ansjwk">
              <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div></div>
            <h1 style={{ color: 'rgb(131, 131, 131)', fontWeight: '600', fontSize: '40px' }}>LOADING</h1>
          </center>
        : data?.data?.ayahs.map((line,idx) => {
          return <div className='container' key={idx}>
            <h1 style={{ direction: 'rtl'}} className='fontQuran mt-5'>{line.text}</h1>
            <div className='d-flex mt-5'>
              <audio src={line.audio} controls controlsList='nodownload'></audio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span><b style={{ color:'rgb(177, 144, 31)'}}>{line.juz}:{line.numberInSurah}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{line.sajda ? <b>Sajda</b> : <b className='text-secondary'>No sajda</b>}</span>
            </div>
           
            <hr />
          </div>
        })
      }
    </div>
  )
}

export default SurahDetail
