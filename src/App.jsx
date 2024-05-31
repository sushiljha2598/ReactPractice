import React, { useRef, useState } from 'react'

function App() {
  const counterRef = useRef(0);
  const [, setForceRender] = useState({})
  const handleClick = () => {
    counterRef.current += 1;
    setForceRender({});
  }
  return (
    <div>
      <h1>
        {counterRef.current}
      </h1>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default App
