import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


    function Github(){
        const data = useLoaderData()
        // const [data,setData] = useState([])
        // useEffect(()=>{
        //     fetch('https://api.github.com/users/anubhav7291-dev')
        //     .then(response=>response.json())
        //     .then(data=>{
        //         setData(data)
        //     })
        // })
    return(
        <div className="bg-gray-600 text-white text-3xl p-4 text-centre">
            Github followers : {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}></img>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anubhav7291-dev')
    return response.json()
}