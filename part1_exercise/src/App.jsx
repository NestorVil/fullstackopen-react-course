import { useState } from 'react';

// Application with three buttons
// Keeps tally of the 3 + an all

const Feedback = ({ props: { good, bad, neutral } }) => {
  return (
    <div>
      <h3>Give Feedback</h3>
      <Button onClick={good.setGood} num={good.good} text='good' />
      <Button onClick={neutral.setNeutral} num={neutral.neutral} text='neutral' />
      <Button onClick={bad.setBad} num={bad.bad} text='bad' />
    </div>
  )
}

const Button = ({ onClick, text, num }) => {
  return (
    <button onClick={() => onClick(num + 1)}>{text}</button>
  )
}

const StatisticsLine = ({ text, num }) => {
  return (
   <tr>
      <td>{text}</td>
      <td>{num}</td>
   </tr>
  )
}

const Statistics = ({ props: {good, bad, neutral} }) => {
  const total = good.good + bad.bad + neutral.neutral;

  if (good.good === 0 && bad.bad=== 0 && neutral.neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text='good' num={good.good} />
          <StatisticsLine text='bad' num={neutral.neutral} />
          <StatisticsLine text='bad' num={bad.bad} />
          <StatisticsLine text='all' num={total} />
          <StatisticsLine text='average' num={(good.good - bad.bad) / total || 0} />
          <StatisticsLine text='positive' num={((good.good / total) * 100 || 0) + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const props = {
    good: {good, setGood},
    bad: {bad, setBad},
    neutral: {neutral, setNeutral},
  };

  return (
    <div>
      <Feedback props={props} />
      <Statistics props={props} />
    </div>
  );
};

export default App;