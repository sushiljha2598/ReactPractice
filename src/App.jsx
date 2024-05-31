import React, { useEffect } from 'react'

function App() {
  const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;
  const fetchUsers = async (uri) => {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchUsers(API_ENDPOINT)
  },[])
  return (
    <div>Fetch API</div>
  )
}

export default App
