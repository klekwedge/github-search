import { observer } from 'mobx-react-lite';
import UserStore from '../../stores/UserStore';
import classes from './UserStat.module.scss';

const UserStat = observer(() => {
  const { user } = UserStore;

  console.log(user);

  if (!user) {
    return <h1>ff</h1>;
  }

  return (
    <div className={classes.userStat}>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Repos</div>
        <div className={classes.infoNumber}>{user.repos}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Following</div>
        <div className={classes.infoNumber}>{user.following}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.infoTitle}>Followers</div>
        <div className={classes.infoNumber}>{user.followers}</div>
      </div>
    </div>
  );
});

export default UserStat;
