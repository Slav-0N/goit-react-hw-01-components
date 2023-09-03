
import PropTypes from 'prop-types'
import { Container } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  console.log(stats)
  return (
    <Container className="statistics">
      <HeaderPaint title={ title } />
      <ul className="stat-list">
          {stats.map(element => {
            return (
              <li className="item" key={element.id}>
                <span className="label">{ element.label}</span>
                <span className="percentage">{element.percentage}</span>
              </li>
          )
        })}
      </ul>
    </Container>
  )
}

const HeaderPaint = ({title}) => {
  let write = "";
  if (title !== "" && title !== undefined) {
    write = <h2 className="title">{title}</h2>
    
  }
  console.log("title >>>", title)
  return write
} 

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}

