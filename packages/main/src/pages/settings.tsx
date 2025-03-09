import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

function Settings() {
	const { logout } = useAuth()
	const navigate = useNavigate()

	function handleLogout() {
		logout()
		navigate('/login')
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">设置</h1>
			<div className="p-4 bg-gray-700 rounded-lg space-y-4">
				<p>设置功能将在此实现</p>
				<Button colorScheme="red" onClick={handleLogout}>
					退出登录
				</Button>
			</div>
		</div>
	)
}

export default Settings
