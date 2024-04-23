import React from 'react'
import { useGetWholeQuranQuery } from '../redux/QuranApi'
import { Li } from 'react-router-dom';
function SurahCard() {
    const { data, error, isLoading } = useGetWholeQuranQuery();
    return (
        <div className='row'>
            <div> 
                <br/>
               <center className='d-md-flex justify-content-around credit'>
                    {
                        isLoading ? undefined : <>
                            <span>English name - <b>{data?.data?.edition?.englishName}</b></span>
                            <span className='ms-4 ms-md-0'>Language - <b>{data?.data?.edition?.language}</b></span><br className='d-md-none' />
                            <span>Arabic name - <b>{data?.data?.edition?.name}</b></span><br className='d-md-none' />
                            <span>Credits - <b style={{ color: 'rgb(177, 144, 31)' }}>Huzaifa Zafar</b></span>
                        </>
                    }
               </center>
               <br />
            </div>
            {
                isLoading ?
                   <center className='mt-1 mt-md-3'>
                        <div className="loadingio-spinner-gear-yzaezf3dcmj"><div className="ldio-rurz9ansjwk">
                            <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div></div>
                        <h1 style={{ color: 'rgb(131, 131, 131)',fontWeight:'600',fontSize:'40px' }}>LOADING</h1>
                   </center>
                : data?.data?.surahs?.map((item, idx) => {
                    return <div className="col-md-4 mb-4" key={idx}>
                        <Link to={`/detail/${item.number}`} className='nav-link'>
                            <div className="card mainCards">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <b style={{ color: 'rgb(177, 144, 31)' }}>{item.number}-</b>
                                        <b className=''> {item.englishName}</b><br />
                                        <span style={{ fontSize: '14px', fontWeight: '600' }} className='text-secondary'>{item.englishNameTranslation}</span><br />
                                        <span className='text-secondary' style={{ fontSize: '14px', fontWeight: '600' }}>{item.revelationType}</span>
                                    </div>
                                    <div>
                                        <h5 style={{ color: 'rgb(177, 144, 31)' }} className="card-title">{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default SurahCard
