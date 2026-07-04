import React, { useEffect, useState } from 'react'

const CurrentTime = () => {
  let time=new Date();
  const [Time, setTime] = useState(null);
  const [date, setdate] = useState(null)
      useEffect(() => {

    const id = setInterval(() => {
      setTime((count)=>count=time.toLocaleTimeString());
      setdate((date)=>date=time.toLocaleDateString()) // Functional update avoids stale closures
    }, 1000);
    return () => clearInterval(id);
  }); 
  return (
    <div className=' clock-con d-flex flex-column align-items-center justify-content-center fs-3'>
      <h1> {date}</h1>
    
        <h1 className='text-info'>{Time}</h1>

    </div>
  )
}

export default CurrentTime