import fetcher from '@/utils/fetcher'

export function login(options: {
	email: string
	password: string
}) {
	return fetcher<{ token: string }>('/auth/login', {
		method: 'POST',
		body: options,
	})
}

export function register(options: {
	email: string
	password: string
	inviteCode?: string
}) {
	return fetcher<{ token: string }>('/auth/register', {
		method: 'POST',
		body: options,
	})
}
