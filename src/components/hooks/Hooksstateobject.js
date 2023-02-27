import React , {useState} from 'react'

function Hooksstateobject() {
    const [name , setName] = useState({ firstName : '' , lastName: ''});

  return (
    <form>
        <input type="text" onChange={(e) => setName({firstName: e.target.value}) }/>
        <input type="text" onChange={(e) => setName({lastName: e.target.value}) }/>
        <h2>Your First Name: {name.firstName}</h2>
        <h2>Your Last Name: {name.lastName}</h2>
    </form>
  )
}

export default Hooksstateobject
