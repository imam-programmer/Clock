import React from 'react'
import ClockHeading from './ClockHeading'
import ClockSlogan from './ClockSlogan'
import CurrentTime from './CurrentTime'

const App = () => {
  return (
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
  )
}

export default App