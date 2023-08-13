import { observer } from 'mobx-react-lite';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Container from '../Container/Container';
import defaultUser from '../../mock';

const App = observer(() => {
  console.log('test');


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
      {/* {user && <UserCard {...user} />} */}
    </Container>
  );
});

export default App;
