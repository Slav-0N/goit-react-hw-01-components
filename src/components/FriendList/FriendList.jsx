import PropTypes from 'prop-types'
import { ListWithFriends, Markered } from './FriendList.styled'


export const FriendList = ({ friends }) => {
  return (
    <ListWithFriends className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <Markered markering={friend.isOnline.toString()}>{friend.isOnline}</Markered>

            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
          )
        })
      }


    </ListWithFriends>
  )
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,

};

Markered.propTypes = {
  markering: PropTypes.string.isRequired

}