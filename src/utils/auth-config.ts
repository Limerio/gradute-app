import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const config: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			authorize(credentials, req) {
				const user = { id: 1, name: 'John Doe', password: 'John_Doe_Password' }
				if (user) {
					return user
				}
				return null
			},
		}),
	],
	callbacks: {
		async jwt({ token }) {
			token.userRole = 'admin'
			return token
		},
	},
}
