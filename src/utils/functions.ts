import { clsx, type ClassValue } from 'clsx'
import { getServerSession } from 'next-auth'
import { twMerge } from 'tailwind-merge'
import { authConfig } from './auth-config'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const getSession = async () => await getServerSession(authConfig)
