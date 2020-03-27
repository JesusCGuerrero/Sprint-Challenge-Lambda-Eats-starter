import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="homePage">
            
                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to={"/pizza"}> 
                        <button>Pizza?</button>
                </Link>

                
        </div>
    )
}

export default Home