import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import ToDo from './pages/todo'
import Calendar from './pages/calendar'
import Tomato from './pages/tomato'
import Settings from './pages/settings'
import { useAuth } from './context/AuthContext'
import MainLayout from './components/layouts/MainLayout'

// 路由守卫组件
interface ProtectedRouteProps {
	authenticationPath: string
	children?: React.ReactNode
}

// 已认证路由 - 如果已登录，正常显示，否则重定向到登录页
const ProtectedRoute = ({
	authenticationPath,
	children,
}: ProtectedRouteProps) => {
	const { isAuthenticated } = useAuth()
	if (!isAuthenticated) {
		return <Navigate to={authenticationPath} replace />
	}

	return children ? <>{children}</> : <Outlet />
}

// 未认证路由 - 如果未登录，正常显示，否则重定向到首页
const PublicRoute = ({
	redirectPath,
	children,
}: { redirectPath: string; children?: React.ReactNode }) => {
	const { isAuthenticated } = useAuth()
	if (isAuthenticated) {
		return <Navigate to={redirectPath} replace />
	}

	return children ? <>{children}</> : <Outlet />
}

// 路由配置
const router = createBrowserRouter([
	// 公开路由 - 未登录可访问，已登录则重定向到首页
	{
		path: '/login',
		element: (
			<PublicRoute redirectPath="/">
				<Login />
			</PublicRoute>
		),
	},
	{
		path: '/register',
		element: (
			<PublicRoute redirectPath="/">
				<Register />
			</PublicRoute>
		),
	},
	// 受保护路由 - 需要登录才能访问，使用MainLayout布局
	{
		path: '/',
		element: (
			<ProtectedRoute authenticationPath="/login">
				<MainLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: <ToDo />,
			},
			{
				path: 'calendar',
				element: <Calendar />,
			},
			{
				path: 'tomato',
				element: <Tomato />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
		],
	},
])

export default router
