import React, { useEffect, useState } from 'react';
import {getList} from './getList'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(data => {
        if(mounted) {
          setData(JSON.stringify(data))
        }
      })
    return () => mounted = false;
  }, [])
  console.log(data)
  return (
    <div className="App">
      <ul>
       {/* {data.schools.map(item => <li key={item}>{item}</li>)} */}
     </ul>
    </div>
  );
}

export default App;
