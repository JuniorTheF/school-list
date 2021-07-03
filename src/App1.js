import _ from 'lodash'
import React from 'react'
import { Table, Header, Segment, Icon, List } from 'semantic-ui-react'
import { tableData } from './tableData'


function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state

  console.log(data)

  return (
    <>
    <Segment basic>
      <Header dividing color='red'>
        <Icon name='building' />
        Таблица ВУЗов
      </Header>
    <Table sortable celled striped fixed color='red'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            ВУЗ
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'dir' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'dir' })}
          >
            Направление
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'price' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'price' })}
          >
            Цена
          </Table.HeaderCell>

          <Table.HeaderCell
            sorted={column === 'years' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'years' })}
          >
            Время обучения
          </Table.HeaderCell>

          <Table.HeaderCell
            sorted={column === 'points' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'points' })}
          >
            Баллы ЕГЭ
          </Table.HeaderCell>

          <Table.HeaderCell
            sorted={column === 'subjects' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'subjects' })}
          >
            Предмет ЕГЭ
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ price, dir, name, id, subjects, points, years }) => (
          <Table.Row key={id}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{dir}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{years}</Table.Cell>
            <Table.Cell>{points}</Table.Cell>
            <Table.Cell>{subjects}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </Segment>
    <Segment basic inverted placeholder floated>
        Сделали:
        <List>
          <List.Item><a href='https://github.com/JuniorTheF'>JuniorTheF</a></List.Item>
          <List.Item><a href='https://github.com/sbmart'>sbmart</a></List.Item>
        </List>
    </Segment>
    </>
  )
}

export default App