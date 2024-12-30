import { useState } from 'react'

const Button = ({ handleClick, text }) => { return <button onClick={handleClick}>{text}</button> }

const GiveFeedback = ({ handleClick }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleClick.good} text={'good'} />
      <Button handleClick={handleClick.neutral} text={'neutral'} />
      <Button handleClick={handleClick.bad} text={'bad'} />
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ statistics }) => {
  if (statistics.total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={statistics.good} />
          <StatisticsLine text={'neutral'} value={statistics.neutral} />
          <StatisticsLine text={'bad'} value={statistics.bad} />
          <StatisticsLine text={'total'} value={statistics.total} />
          <StatisticsLine text={'average'} value={statistics.average} />
          <StatisticsLine text={'positive'} value={statistics.positive} />
        </tbody>
        
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  const handleClick = {
    good: handleClickGood,
    neutral: handleClickNeutral,
    bad: handleClickBad
  }

  const average = () => {
    const total = good + neutral + bad
    if (total === 0) {
      return 0
    }
    const weightedSum = (good * 1) + (neutral * 0) + (bad * -1)
    return (weightedSum / total).toFixed(1)
  }

  const positive = () => {
    const total = good + neutral + bad
    if (total === 0) {
      return 0
    }
    return ((good / total) * 100).toFixed(1)
  }

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: good + neutral + bad,
    average: average(),
    positive: positive() + "%"
  }

  return (
    <div>
      <GiveFeedback handleClick={handleClick} />
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App