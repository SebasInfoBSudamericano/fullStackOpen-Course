const Total = ({exercises}) => <p><strong>total of {exercises} exercises</strong></p>

const Part = ({name,exercises}) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
  return (
    <section id="parts">
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      ))}
    </section>
  )
}

const Header = ({ heading }) => <h1>{heading}</h1>

const Course = ({ course }) => {
  return (
    <>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts
        .map(part => (part.exercises))
        .reduce((total, actual) => total + actual, 0)
      } />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App