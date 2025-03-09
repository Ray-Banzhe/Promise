import { useAuth } from '@/context/AuthContext'
import { Field } from '@chakra-ui/react'
import { Input, Button, Card, Stack, Link } from '@chakra-ui/react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { login as loginApi } from '@/data/auth'
import { useRequest } from 'ahooks'

interface LoginForm {
	email: string
	password: string
}

function Login() {
	const { runAsync } = useRequest(loginApi, {
		manual: true,
	})
	const navigate = useNavigate()
	const { login } = useAuth()

	const { register, handleSubmit } = useForm<LoginForm>()
	const onSubmit: SubmitHandler<LoginForm> = async (data) => {
		const { token } = await runAsync(data)
		login(token)
		navigate('/')
	}

	return (
		<div className="flex h-screen justify-center items-center">
			<Card.Root w="full" maxW="lg" h="90" pb="4">
				<Card.Header>
					<Card.Title>登录</Card.Title>
					<Card.Description>请输入您的邮箱和密码</Card.Description>
				</Card.Header>
				<Card.Body>
					<Stack gap="4" w="full">
						<Field.Root>
							<Field.Label>邮箱</Field.Label>
							<Input placeholder="me@example.com" {...register('email')} />
							<Field.ErrorText>邮箱格式错误</Field.ErrorText>
						</Field.Root>
						<Field.Root>
							<Field.Label>密码</Field.Label>
							<Input
								placeholder="********"
								type="password"
								{...register('password')}
							/>
							<Field.ErrorText>密码格式错误</Field.ErrorText>
						</Field.Root>
					</Stack>
				</Card.Body>
				<Card.Footer justifyContent="center" flexDirection="column" gap="2">
					<Button
						variant="solid"
						colorPalette="cyan"
						className="w-full"
						onClick={handleSubmit(onSubmit)}
					>
						登录
					</Button>
					<div className="text-center text-sm">
						还没有账号？
						<Link asChild colorPalette="cyan">
							<ReactLink to="/register">注册</ReactLink>
						</Link>
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
	)
}

export default Login
