import { Provider } from './components/ui/provider';
import { AuthProvider } from './context/AuthContext';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <Provider>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
