import React from 'react'
import ParcelList from './ParcelList'
import './home.css'

function Home({ logout, user }) {
    return (
        <div className='bg'>
            <div>
                <h1>Logged in</h1>
                {/* <ParcelList user={user}/> */}
                <button className='signOutBtn' onClick={() => logout()}> Sign Out </button>
                <ParcelList user={user} />
            </div>
        </div>
    )
}

export default Home
