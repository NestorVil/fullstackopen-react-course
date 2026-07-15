import Part from './Part';

const Content = ({ course }) => {
  let parts = course.parts;

  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
      <h5>total of {parts.reduce((acculm, current) => acculm + current.exercises, 0)}</h5>
    </div>
  )
};

export default Content;