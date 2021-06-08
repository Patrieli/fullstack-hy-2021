import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ points, anecdotes }) => {
  if (!points.reduce((a, b) => a + b, 0)) {
    return (
      <div>
        No votes given yet
      </div>
    )
  }

  var i = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)

  return (
    <div>
      {anecdotes[i]}
      <div>has {points[i]} points</div>
    </div>
  )

}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))
  const [selected, setSelected] = useState(0)

  const increasePoints = (selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <Button handleClick={() => increasePoints(selected)} text='vote'></Button>
        <Button handleClick={() => { setSelected(Math.floor(Math.random() * anecdotes.length)) }} text='next anecdote'></Button>
      </div>
      <h2>Anecdote with most votes</h2>
      <Statistics points={points} anecdotes={anecdotes}></Statistics>
    </div>

  )
}

export default App