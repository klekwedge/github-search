import { observer } from 'mobx-react-lite';
import Counter from '../counter';
import Button from '../Button/Button';
import Search from '../Search/Search';
import Header from '../Header/Header';

const App = observer(() => {
  console.log('test');

  const test = () => {};

  return (
    <div>
      <Header />
      <Search
        hasError={false}
        onSubmit={() => {
          console.log('s');
        }}
      />
    </div>
  );
});

export default App;
