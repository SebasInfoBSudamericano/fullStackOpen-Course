import { useState } from 'react'

const AnecdoteViewer = ({ anecdotes, vote }) => <p>{anecdotes} <br /> has {vote} votes</p>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleNextAnecdote = () => {
    if (selected < (anecdotes.length)) {
      setSelected(selected + 1)
    }
  }
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const updateVotes = [...vote]
    updateVotes[selected] += 1
    setVote(updateVotes)
  }

  const mostVotes = vote.indexOf(Math.max(...vote))

  return (
    <div>
      <section className="main">
        <h1>Anecdote of the day</h1>
        <AnecdoteViewer anecdotes={anecdotes[selected]} vote={vote[selected]} />
        <Button handleClick={handleVote} text={'vote'} />
        <Button handleClick={handleNextAnecdote} text={'next anecdote'} />
      </section>
      <section className="mostVotes">
        <h1>Anecdote with most votes</h1>
        <AnecdoteViewer anecdotes={anecdotes[mostVotes]} vote={vote[mostVotes]} />
      </section>
    </div>
  )
}

export default App