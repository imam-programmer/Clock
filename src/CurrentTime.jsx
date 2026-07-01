import React, { useEffect, useState } from 'react'

const CurrentTime = () => {
    const [first, setfirst] = useState(0);
    let time=new Date()


  return (
    <div>
        this is the CurrentTime:{time.toLocaleDateString()}<br/>
       <h1></h1>
    </div>
  )
}

export default CurrentTime