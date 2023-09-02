export const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
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
    </table>
  )
  
}

const TransactionRender = ({items}) => {
  return items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{ item.currency}</td>
      </tr>
    )
  }
  )
}