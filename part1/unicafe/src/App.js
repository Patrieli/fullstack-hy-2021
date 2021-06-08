import React, { useState } from 'react'

const StatisticLine = ({ value, text }) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const allVotes = props.allVotes

  if (allVotes === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine value={good} text='good' />
        <StatisticLine value={neutral} text='neutral' />
        <StatisticLine value={bad} text='bad' />
        <StatisticLine value={allVotes} text='all' />
        <StatisticLine value={(good - bad) / allVotes} text='average' />
        <StatisticLine value={(good / allVotes) * 100 + '%'} text='positive' />
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAll] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => { setGood(good + 1); setAll(allVotes + 1) }} text='good'></Button>
      <Button handleClick={() => { setNeutral(neutral + 1); setAll(allVotes + 1) }} text='neutral'></Button>
      <Button handleClick={() => { setBad(bad + 1); setAll(allVotes + 1) }} text='bad'></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} allVotes={allVotes}></Statistics>
    </div >
  )
}

export default App