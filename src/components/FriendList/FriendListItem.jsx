import PropTypes from 'prop-types';
import { Markered } from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <Markered $markering={friend.isOnline}>{friend.isOnline}</Markered>

            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
