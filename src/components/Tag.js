
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
const API_KEY = 'd1lnzvIbbo6r3ILjUnEsRRzSGTih0H91';
const Tag = () => {
  const [tag,setTag] = useState('');
 

  const {gif,loading,fetchData} = useGif(tag);
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className='mt-[15px]  text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>):( <img src={gif} width ="450"/>)
      }
      
     <input
      className='w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event)=>setTag(event.target.value)}
     value = {tag}
     />
      <button onClick={()=>fetchData(tag)}
       className='w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}




export default Tag
