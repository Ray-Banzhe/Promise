import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';


// 路由配置
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <div>首页</div>, // 这里可以替换为实际的首页组件
  },
  // 可以添加更多路由
]);

export default router;
