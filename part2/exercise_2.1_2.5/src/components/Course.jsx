import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div>
          <Header key={course.id} name={course.name} />
          <Content key={course.id} course={course} />
        </div>
      ))}

    </div>
  )
}

export default Course;