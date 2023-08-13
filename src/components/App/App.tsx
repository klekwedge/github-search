/* eslint-disable react/jsx-props-no-spreading */
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Container from '../Container/Container';
import defaultUser from '../../mock';
import UserCard from '../UserCard/UserCard';
import isGithubUser from '../../utils/typeguards';
import extractLocalUser from '../../utils/extract-local-user';
import { GithubError, GithubUser, LocalGithubUser } from '../../types';
import UserStore from '../../stores/UserStore';

const App = observer(() => {
  // const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const { user, getGitHubUser } = UserStore;

  useEffect(() => {
    getGitHubUser();
  }, []);

  console.log(user);

  return (
    <Container>
      <Header />
      {/* <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />} */}
    </Container>
  );
});

export default App;
