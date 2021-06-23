import React, { useEffect, useState } from 'react';
import { Table, Accordion, Icon, Segment } from 'semantic-ui-react'
import { getList } from './getList'


function App() {
  const [ toggle, setToggle ] = useState(0)
  //const handleClick = setToggle(true)
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
<Segment>
        <Table >
          <Table.Header >
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
            {data.map(item => <>
              <Table.Row>
              <Table.Cell><Accordion><Accordion.Title active={toggle} onClick={() => setToggle(!toggle)}><Icon name='dropdown' />{item.name}</Accordion.Title><Accordion.Content active={toggle}>123</Accordion.Content></Accordion></Table.Cell>
              <Table.Cell>{item.dir}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.years}</Table.Cell>
              <Table.Cell>{item.points}</Table.Cell>
              <Table.Cell>{item.subjects}</Table.Cell>
              </Table.Row>
            </>)}
          
          </Table.Body>
        </Table>
        </Segment>
  );
}

export default App;
