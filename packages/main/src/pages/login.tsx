import { Collapsible, Field } from '@chakra-ui/react';
import { Input, Button, Card, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
  inviteCode: string;
}

function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card.Root w="full" maxW="lg" h="90" pb="4">
        <Card.Header>
          <Card.Title>登陆</Card.Title>
          <Card.Description>
            请输入您的邮箱和密码
          </Card.Description>
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
              <Input placeholder="********" {...register('password')} />
              <Field.ErrorText>密码格式错误</Field.ErrorText>
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
        <Card.Footer justifyContent="center" flexDirection="column">
          <Button variant="solid" colorPalette="cyan" className="w-full" onClick={handleSubmit(onSubmit)}>登录</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}

export default Login;
