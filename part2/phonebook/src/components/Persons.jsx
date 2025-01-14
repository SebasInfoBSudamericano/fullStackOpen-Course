const Persons = ({ persons, filter }) => {

    const toShow = filter === ''
        ? persons
            .map(person => <p key={person.id}>{person.name} {person.number}</p>)
        : persons
            .filter(person =>
                person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(person => <p key={person.id}>{person.name} {person.number}</p>)

    return <>{toShow}</>
}

export default Persons