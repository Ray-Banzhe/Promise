import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

function ToDo(){
  const {logout} = useAuth()
  const navigate = useNavigate()

  function handleClick(){
    console.log('logout')
    logout()
    navigate('/login')
  }

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={handleClick}>退出登录</button>
    </div>
  )
}

export default ToDo;