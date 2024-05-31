import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Hello World!");
  useEffect(()=>{
    const timer = setTimeout(() => {
      setMessage("Goodbye World!!!")
    }, 5000);
    return () => clearTimeout(timer)
  },[])
  return (
    <div>
      <h1>
        Message : {message}
      </h1>
    </div>
  )
}

export default App
