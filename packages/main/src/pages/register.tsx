import {
	Collapsible,
	Field,
	Card,
	Input,
	Stack,
	Link,
	Button,
} from '@chakra-ui/react'
import { useRequest } from 'ahooks'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { register as registerApi } from '@/data/auth'
import { useAuth } from '@/context/AuthContext'

interface LoginForm {
	email: string
	password: string
	rePassword: string
	inviteCode: string
}

function Register() {
	const { runAsync } = useRequest(registerApi, {
		manual: true,
	})
	const navigate = useNavigate()
	const { login } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<LoginForm>()
	const onSubmit: SubmitHandler<LoginForm> = async (data) => {
		const { token } = await runAsync(data)
		login(token)
		navigate('/')
	}

	// 获取密码值用于确认密码验证
	const password = watch('password')

	return (
		<div className="flex h-screen justify-center items-center">
			<Card.Root w="full" maxW="lg" h="90" pb="4">
				<Card.Header>
					<Card.Title>注册</Card.Title>
				</Card.Header>
				<Card.Body>
					<Stack gap="4" w="full">
						<Field.Root invalid={!!errors.email}>
							<Field.Label>邮箱</Field.Label>
							<Input
								placeholder="me@example.com"
								{...register('email', {
									required: '邮箱不能为空',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: '邮箱格式错误',
									},
								})}
							/>
							{errors.email && (
								<Field.ErrorText>{errors.email.message}</Field.ErrorText>
							)}
						</Field.Root>
						<Field.Root invalid={!!errors.password}>
							<Field.Label>密码</Field.Label>
							<Input
								placeholder="********"
								type="password"
								{...register('password', {
									required: '密码不能为空',
									minLength: {
										value: 8,
										message: '密码至少需要8个字符',
									},
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
										message: '密码需包含大小写字母和数字',
									},
								})}
							/>
							<Field.ErrorText>{errors.password?.message}</Field.ErrorText>
						</Field.Root>
						<Field.Root invalid={!!errors.rePassword}>
							<Field.Label>确认密码</Field.Label>
							<Input
								placeholder="********"
								type="password"
								{...register('rePassword', {
									required: '确认密码不能为空',
									validate: (value) => value === password || '两次密码不一致',
								})}
							/>
							<Field.ErrorText>{errors.rePassword?.message}</Field.ErrorText>
						</Field.Root>
						<Collapsible.Root>
							<Collapsible.Trigger>
								<div className="text-12px">邀请码(选填)</div>
							</Collapsible.Trigger>
							<Collapsible.Content>
								<Field.Root invalid={!!errors.inviteCode}>
									<Input
										placeholder="123456"
										{...register('inviteCode', {
											pattern: {
												value: /^[A-Za-z0-9]{6,12}$/,
												message: '邀请码格式错误',
											},
										})}
									/>
									<Field.ErrorText>
										{errors.inviteCode?.message}
									</Field.ErrorText>
								</Field.Root>
							</Collapsible.Content>
						</Collapsible.Root>
					</Stack>
				</Card.Body>

				<Card.Footer justifyContent="center" flexDirection="column" gap="2">
					<Button
						variant="solid"
						colorPalette="cyan"
						className="w-full"
						onClick={handleSubmit(onSubmit)}
					>
						注册
					</Button>
					<div className="text-center text-sm">
						已有账号？
						<Link asChild colorPalette="cyan">
							<ReactLink to="/login">登录</ReactLink>
						</Link>
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
	)
}

export default Register
