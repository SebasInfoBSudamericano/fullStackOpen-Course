import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (e) => {
    console.log('value -> ' + e.target.value)
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    console.log('value -> ' + e.target.value)
    setNewNumber(e.target.value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const alreadyAdded = persons.find(person => person.name == personObject.name || person.number == personObject.number)

    alreadyAdded ? alert(
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
      <form onSubmit={handleSumbit}>
        <div>
          name: <input value={newName} onChange={handleName} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} pattern="[0-9+\(\)\- ]*" required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        console.log(person.name)
        return <p key={index}>{person.name} {person.number}</p>
      })}
    </div>
  )
}

export default App