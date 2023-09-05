import PropTypes from 'prop-types';
import { TransactionTable, TrColor } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionRender items={items} />
      </tbody>
    </TransactionTable>
  );
};

const TransactionRender = ({ items }) => {
  return items.map((item, index) => {
    return (
      <TrColor key={item.id} $linecolor={index % 2}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </TrColor>
    );
  });
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
