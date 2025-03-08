import { Collapsible, Field, Card, Input, Stack, Link, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as ReactLink } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
  rePassword: string;
  inviteCode: string;
}

function Register() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card.Root w="full" maxW="lg" h="90" pb="4">
        <Card.Header>
          <Card.Title>注册</Card.Title>
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
            <Input placeholder="********" type="password" {...register('password')} />
            <Field.ErrorText>密码格式错误</Field.ErrorText>
          </Field.Root>
          <Field.Root>
            <Field.Label>确认密码</Field.Label>
            <Input placeholder="********" type="password" {...register('rePassword')} />
            <Field.ErrorText>两次密码不一致</Field.ErrorText>
          </Field.Root> 
          <Collapsible.Root>
            <Collapsible.Trigger>
              <div className='text-12px'>邀请码(选填)</div>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Field.Root>
                <Input placeholder="123456" {...register('inviteCode')} />
                <Field.ErrorText>邀请码格式错误</Field.ErrorText>
              </Field.Root>
            </Collapsible.Content>
          </Collapsible.Root>
        </Stack>
      </Card.Body>

      <Card.Footer justifyContent="center" flexDirection="column" gap="2">
        <Button variant="solid" colorPalette="cyan" className="w-full" onClick={handleSubmit(onSubmit)}>注册</Button>
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

export default Register;