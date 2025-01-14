import { use } from 'react'
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

  const toShow = filter == ''
    ? persons
      .map(person => <p key={person.id}>{person.name} {person.number}</p>)
    : persons
      .filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(person => <p key={person.id}>{person.name} {person.number}</p>)

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
      filter shown with <input value={filter} onChange={handleFilter} />
      <h2>add a new</h2>
      <form onSubmit={handleSumbit}>
        <div>
          name: <input value={newName} onChange={handleName} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} pattern="[0-9+\(\)\- ]*" required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {toShow}
    </div>
  )
}

export default App