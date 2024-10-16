import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';


const useGif = (tag) => {

    
    const [gif,setGif] = useState('');
   const [loading,setLoading] = useState(false);
   const randomMemeUrl =  `https://api.giphy.com/v1/gifs/random?api_key=d1lnzvIbbo6r3ILjUnEsRRzSGTih0H91`;
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=d1lnzvIbbo6r3ILjUnEsRRzSGTih0H91&tag=${tag}`;

   async function fetchData(tag ){
        setLoading(true)
       const {data}=  await axios.get(tag ? tagMemeUrl:randomMemeUrl);
        const imageSource = await data.data.images.downsized_large.url;
       setGif(imageSource);
       setLoading(false);
    }
    useEffect(()=>{
fetchData();
    } ,[])

 return {gif,fetchData};
}

export default useGif
