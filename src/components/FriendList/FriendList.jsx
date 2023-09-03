import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem frends={friends} />
    </ul>
  )
}

const FriendListItem = ({ frends }) => {
  return frends.map(friend => {
    return (
      <li className="item" key={friend.id}>
        <span className="status">{ friend.isOnline }</span>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{ friend.name }</p>
      </li>
    )
  })
}

FriendList.propTypes = {
  friends: PropTypes.array,

}