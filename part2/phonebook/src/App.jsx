import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const handleName = (e) => {
    console.log('name -> ' + e.target.value)
    setNewName(e.target.value)
  }

  const [newNumber, setNewNumber] = useState('')
  const handleNumber = (e) => {
    console.log('number -> ' + e.target.value)
    setNewNumber(e.target.value)
  }

  const [filter, setFilter] = useState('')
  const handleFilter = (e) => {
    console.log('filter -> ' + e.target.value)
    setFilter(e.target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const alreadyAdded = persons.find(person => person.name == personObject.name || person.number == personObject.number)

    alreadyAdded
      ? alert(
        alreadyAdded.name === personObject.name
          ? `${newName} is already added to the phonebook`
          : `${newNumber} is already added to the phonebook`
      )
      : setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        handleSumbit={handleSumbit}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber} 
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}/>
    </div>
  )
}

export default App