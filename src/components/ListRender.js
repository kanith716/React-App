import React from 'react'
import ChildPerson from './ChildPerson';

function ListRender() {
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
      
    const name = ["kanith" , "Dhoni" , "Raina"];
    const personList = persons.map(person => <ChildPerson person={person}/>);
  return (
    <div>
      {personList}
    </div>
  )
}

export default ListRender
