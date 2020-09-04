import React from 'react'
import FyloDataUpload from '../components/FyloDataUpload/FyloDataUpload';
import FyloDataUsage from '../components/FyloDataUsage/FyloDataUsage';
const Home = () => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-40">
            <FyloDataUpload/>
            <FyloDataUsage/>
        </div>
    )
}

export default Home
