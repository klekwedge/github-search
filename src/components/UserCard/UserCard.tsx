/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import UserStore from '../../stores/UserStore';
import { UserInfo, UserInfoProps } from '../UserInfo/UserInfo';
import UserStat from '../UserStat/UserStat';
import UserTitle from '../UserTitle/UserTitle';
import classes from './UserCard.module.scss';

function UserCard() {
  const { user } = UserStore;

  if (!user) {
    return <h1>ff</h1>;
  }

  return (
    <div className={classes.userCard}>
      <img className={classes.avatar} src={user.avatar} alt="Avatar iamge" />
      <UserTitle />
      <p className={`${classes.bio}${user.bio ? '' : ` ${classes.empty}`}`}>{user.bio || 'This profile has no bio'}</p>
      <UserStat />
      <UserInfo />
    </div>
  );
}

export default UserCard;
