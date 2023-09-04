
import PropTypes from 'prop-types'
import { Container } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title && <h2 className="title">{title}</h2>}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}

