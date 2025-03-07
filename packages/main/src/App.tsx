import Login from './pages/login';
import { Provider } from './components/ui/provider';

const App = () => {
  return (
    <Provider>
      <main>
        <Login />
      </main>
    </Provider>
  );
};

export default App;
