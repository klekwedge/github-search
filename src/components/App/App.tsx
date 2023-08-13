import { observer } from 'mobx-react-lite';
import Counter from '../counter';

const App = observer(() => {
  console.log('test');

  return (
    <div>
      <button type="button">+</button>
      <button type="button">-</button>
    </div>
  );
});

export default App;
