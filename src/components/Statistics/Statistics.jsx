import PropTypes from 'prop-types';
import { Container } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(element => {
          return (
            <li key={element.id}>
              <span>{element.label}</span>
              <span>{element.percentage}</span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
