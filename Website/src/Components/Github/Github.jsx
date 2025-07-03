import React,{ useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/student-nilay')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 
    text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={200} />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response=await fetch('https://api.github.com/users/student-nilay')
    return response.json(); 
}