import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
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
        {/* {
          data && data.length > 0 && data.map((item) => <div key={item.id}> {item.years}</div>) 
        } */}
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Название ВУЗа</Table.HeaderCell>
              <Table.HeaderCell>Направление</Table.HeaderCell>
              <Table.HeaderCell>Цена обучения</Table.HeaderCell>
              <Table.HeaderCell>Время обучения</Table.HeaderCell>
              <Table.HeaderCell>Баллы</Table.HeaderCell>
              <Table.HeaderCell>Предметы ЕГЭ</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <Table.Row>
            {data.map(item => <Table.Cell>{item.name}</Table.Cell>)}
          </Table.Row>
          </Table.Body>
        </Table>
      </ul>
    </div>
  );
}

export default App;
