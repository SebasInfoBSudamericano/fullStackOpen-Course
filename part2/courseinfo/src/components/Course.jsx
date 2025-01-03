import Header from './Header'
import Content from './Content'
import Total from './Total'

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

export default Course