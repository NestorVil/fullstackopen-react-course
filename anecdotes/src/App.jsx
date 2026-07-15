import { useState } from 'react'

const getNum = (max) => Math.floor(Math.random() * max);

const DisplayVotes = ({ anecdoteLength, setAnecdoteIdx, votes, anecdoteIdx, setVotes }) => {
  return (
    <div>
      <button onClick={() => updateVote(votes, anecdoteIdx, setVotes)}>has {votes[anecdoteIdx]} votes</button>
      <button onClick={() => setAnecdoteIdx(getNum(anecdoteLength))} >next anecdote</button>
    </div>
  )
}

const updateVote = (votes, anecdoteIdx, setVotes) => {
  const newVotes = [...votes];
  newVotes[anecdoteIdx] += 1;
  setVotes(newVotes);
}

const DisplayLargest = ({ votes, anecdotes }) => {
  let mostVotes = Math.max(...votes);
  let idx = votes.findIndex(vote => vote === mostVotes);

  return (
    <div>
      <h3>Anecdote with the most votes</h3>
      <p>{anecdotes[idx]} has {votes[idx]} votes</p>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  let [ votes, setVotes ] = useState(Array(anecdotes.length).fill(0));
  let [ anecdoteIdx, setAnecdoteIdx ] = useState(0);

  return (
    <>
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[anecdoteIdx]}
      <br />
      <DisplayVotes setVotes={setVotes} anecdoteLength={anecdotes.length} setAnecdoteIdx={setAnecdoteIdx} votes={votes} anecdoteIdx={anecdoteIdx} />
    </div>
    <DisplayLargest votes={votes} anecdotes={anecdotes} />
    </>
  )
}

export default App