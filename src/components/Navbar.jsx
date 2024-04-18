import React f 'react'
import { Link } from 'react-router-dom'

function Navbar({ surahName, surahNameTrans , loading }) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container d-flex pt-1 pt-md-0">
                    <Link to={'/'} className='nav-link'><i className="ri-home-4-line"></i> <b>Home</b></Link>
                    {
                        loading ? <b>Loading...</b> : <span className='nav-link'><b>{surahName}</b> ( <b style={{ color: 'rgb(219, 204, 151)' }}>{surahNameTrans}</b> )</span>
                    }
                </div>
            </nav>
        </div>

    )
}

export default Navbar
