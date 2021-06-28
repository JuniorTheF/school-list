import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'
import { getList } from './getList'

const tableData = [
  {
    "name": "МФТИ",
    "dir": "Прикладные математика и физика",
    "price": 270000,
    "years": 4,
    "points": 258,
    "subjects": "физика",
    "id": 0
  },
  {
    "name": "МИРЭА",
    "dir": "Информатика и вычислительная техника",
    "price": 177000,
    "years": 4,
    "points": 230,
    "subjects": "физика",
    "id": 1
  },
  {
    "name": "МИРЭА",
    "dir": "Прикладная информатика",
    "price": 177000,
    "years": 4,
    "points": 260,
    "subjects": "информатика",
    "id": 2
  },
  {
    "name": "МИРЭА",
    "dir": "Информационные системы и технологии",
    "price": 177000,
    "years": 4,
    "points": 250,
    "subjects": "физика",
    "id": 3
  },
  {
    "name": "МТУСИ",
    "dir": "Информатика и вычислительная техника",
    "price": 80000,
    "years": 4,
    "points": 228,
    "subjects": "физика",
    "id": 4
  },
  {
    "name": "ВШЭ",
    "dir": "Информатика и вычислительная техника",
    "price": 390000,
    "years": 4,
    "points": 275,
    "subjects": "физика",
    "id": 5
  },
  {
    "name": "МГТУ",
    "dir": "Информатика и вычислительная техника",
    "price": 285000,
    "years": 4,
    "points": 255,
    "subjects": "информатика",
    "id": 6
  },
  {
    "name": "МГТУ",
    "dir": "Прикладная информатика",
    "price": 285000,
    "years": 4,
    "points": 243,
    "subjects": "информатика",
    "id": 7
  },
  {
    "name": "МИСиС",
    "dir": "Информатика и вычислительная техника",
    "price": 228000,
    "years": 4,
    "points": 270,
    "subjects": "информатика",
    "id": 8
  },
  {
    "name": "Плеханов",
    "dir": "Прикладная информатика",
    "price": 120000,
    "years": 4,
    "points": 210,
    "subjects": "информатика",
    "id": 9
  },
  {
    "name": "Сеченовский",
    "dir": "Информационные системы и технологии",
    "price": 242000,
    "years": 4,
    "points": 174,
    "subjects": "физика",
    "id": 10
  },
  {
    "name": "МЭИ",
    "dir": "Информатика и вычислительная техника",
    "price": 81000,
    "years": 5,
    "points": 130,
    "subjects": "информатика",
    "id": 11
  },
  {
    "name": "МАИ",
    "dir": "Информатика и вычислительная техника",
    "price": 65000,
    "years": 4,
    "points": 180,
    "subjects": "физика",
    "id": 12
  },
  {
    "name": "МАИ",
    "dir": "Информационные системы и технологии",
    "price": 80000,
    "years": 4,
    "points": 183,
    "subjects": "физика",
    "id": 13
  },
  {
    "name": "МИЭТ",
    "dir": "Информатика и вычислительная техника",
    "price": 145000,
    "years": 4,
    "points": 228,
    "subjects": "физика",
    "id": 14
  },
  {
    "name": "МИФИ",
    "dir": "Информатика и вычислительная техника",
    "price": 275000,
    "years": 4,
    "points": 285,
    "subjects": "физика",
    "id": 15
  }
]

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
    data1: getList(),
    data: tableData,
    direction: null,
  })
  const { column, data, data1, direction } = state

  console.log(data)
  console.log(data1)

  // getList().then(res => {data1 = res})


  return (
    <Table sortable celled striped fixed>
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
  )
}

export default App