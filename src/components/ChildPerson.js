import React from 'react'
// import ListRender from './ListRender'

function ChildPerson({person}) {
  return (
    <div>
       <h2>My name {person.name} My age is {person.age} and my skil is {person.skill}</h2>
    </div>
  )
}

export default ChildPerson
