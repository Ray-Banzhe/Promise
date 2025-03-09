import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

function ToDo() {
	const { logout } = useAuth()
	const navigate = useNavigate()

	function handleClick() {
		console.log('logout')
		logout()
		navigate('/login')
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">待办事项</h1>
			<div className="p-4 bg-gray-700 rounded-lg">
				<p>待办事项功能将在此实现</p>
			</div>
		</div>
	)
}

export default ToDo
