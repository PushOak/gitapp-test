import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  // Here the data is stored that comes from API
  const [users, setUsers] = useState([]);

  // Get data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {return res.json()})
    .then((data) => setUsers(data))
  });


  // , {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: "Dude", age: 3000
  //   })
  // })

  // This is the URL of the API


  return ( 
  <div className = "App" >
    <h1>Hello React works</h1> {
      users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name} my motto: {user.company.catchPhrase}</h3>
            <p>Email: {user.email}</p>
          </div>
        );
      })
    } 
    </div>
  );
}

export default App;