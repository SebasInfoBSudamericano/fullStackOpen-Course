import { act } from "react"

const Total = ({ exercises }) => <p><strong>total of {exercises} exercises</strong></p>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
  return (
    <section id="parts">
      {parts.map(part => {
        console.log(part.id, " ", part.name, " ", part.exercises)
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
      })}
    </section>
  )
}

const Header = ({ heading }) => <h2>{heading}</h2>

const Course = ({ course }) => {
  return (
    <>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total exercises={
        course.parts
          .map(part => {
            console.log(part.exercises);
            return part.exercises
          })
          .reduce((total, actual) => {
            console.log(actual, " - ", total)
            return total + actual
          })
      } />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Header heading={'Web development curriculum'}/>
      <Course course={courses[0]}/>
      <Course course={courses[1]}/>
    </>
  )
}
export default App