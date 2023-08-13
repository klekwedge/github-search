/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { UserInfo, UserInfoProps } from '../UserInfo/UserInfo';
import { UserStat, UserStatProps } from '../UserStat/UserStat';
import { UserTitle, UserTitleProps } from '../UserTitle/UserTitle';
import classes from './UserCard.module.scss';

interface UserCardProps extends UserStatProps, UserTitleProps, UserInfoProps {
  avatar: string;
  bio?: string;
}

function UserCard({
  login,
  avatar,
  created,
  bio,
  repos,
  followers,
  following,
  blog,
  company,
  location,
  twitter,
}: UserCardProps) {
  return (
    <div className={classes.userCard}>
      <img className={classes.avatar} src={avatar} alt={login} />
      <UserTitle login={login} name={name} created={created} />
      <p className={`${classes.bio}${bio ? '' : ` ${classes.empty}`}`}>{bio || 'This profile has no bio'}</p>
      <UserStat repos={repos} followers={followers} following={following} />

      <UserInfo blog={blog} company={company} location={location} twitter={twitter} />
    </div>
  );
}

export default UserCard;
