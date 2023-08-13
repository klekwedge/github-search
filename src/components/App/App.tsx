/* eslint-disable react/jsx-props-no-spreading */
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Container from '../Container/Container';
import defaultUser from '../../mock';
import UserCard from '../UserCard/UserCard';
import isGithubUser from '../../utils/typeguards';
import extractLocalUser from '../../utils/extract-local-user';
import { GithubError, GithubUser, LocalGithubUser } from '../../types';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const gitHubUser = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(gitHubUser)) {
      setUser(extractLocalUser(gitHubUser));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
