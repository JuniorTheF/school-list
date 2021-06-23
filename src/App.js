import React, { useEffect, useState } from 'react';
import { getList } from './getList'

function App() {
  const [data, setData] = useState([]);
  // function getNewList() {
  //   console.log('hello')
  //   fetch('data.json')
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (myJson) {
  //       setData(myJson)
  //     })
  // }


  useEffect(() => {
    // getNewList()
    getList()
      .then(data => {
        setData(data)
      })
  }, [])
  console.log(data)
  return (
    <div className="App">
      <ul>
        {/* {data && data.length > 0 && data.map((item) => <li key={item._id}>{item}</li>)} */}
        {
          data && data.length > 0 && data.map((item) => <div key={item.id}> {item.years}</div>)
        }
      </ul>
    </div>
  );
}

export default App;
