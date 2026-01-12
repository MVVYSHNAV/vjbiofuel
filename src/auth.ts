import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                if (credentials?.email === 'admin@example.com' && credentials?.password === 'password') {
                    return { id: '1', name: 'Admin User', email: 'admin@example.com' };
                }
                return null;
            },
        }),
    ],
});
