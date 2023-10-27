'use client'

import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const UserSidebarDropdownMenu = () => {
	const router = useRouter()
	const logout = useCallback(() => {
		signOut()
	}, [])

	return (
		<DropdownMenuContent>
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuItem onClick={() => router.push('/settings')}>
				<Settings className="mr-2 h-4 w-4" />
				Settings
			</DropdownMenuItem>
			<DropdownMenuItem onClick={logout}>
				<LogOut className="mr-2 h-4 w-4" />
				Logout
			</DropdownMenuItem>
		</DropdownMenuContent>
	)
}
