import { Provider } from './components/ui/provider';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <Provider>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  );
};

export default App;
