import { useAuth } from '@/context/AuthContext'
import { Input } from '@chakra-ui/react'
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
    <div className="p-4 flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold mb-4">收集箱</h3>
      <section className="w-full">
        {/* 搜索框 */}
        <Input type="text" placeholder="搜索" variant="subtle" _placeholder={{ color: 'inherit' }} color="teal" />
      </section>
    </div>
  )
}

export default ToDo
