const PersonForm = ({handleSumbit, newName, handleName, newNumber, handleNumber}) => {
    return (
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
    )
}

export default PersonForm