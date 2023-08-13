/* eslint-disable react/jsx-props-no-spreading */
import { observer } from 'mobx-react-lite';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Container from '../Container/Container';
import defaultUser from '../../mock';
import UserCard from '../UserCard/UserCard';

const App = observer(() => {
  console.log('test');
  const user = defaultUser;


  return (
    <Container>
      <Header />
      <Search
        hasError={false}
        onSubmit={() => {
          console.log('s');
        }}
        //  hasError={!user} onSubmit={fetchUser}
      />
      {user && <UserCard {...user} />}
    </Container>
  );
});

export default App;
