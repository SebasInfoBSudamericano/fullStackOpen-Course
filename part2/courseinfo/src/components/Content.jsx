import Part from './Part';

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

export default Content