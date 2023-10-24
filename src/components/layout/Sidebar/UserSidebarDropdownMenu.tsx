'use client'

import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'

export const UserSidebarDropdownMenu = () => {
	const logout = useCallback(() => {
		signOut()
	}, [])

	return (
		<DropdownMenuContent>
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuItem onClick={logout}>
				<LogOut className="mr-2 h-4 w-4" />
				Logout
			</DropdownMenuItem>
		</DropdownMenuContent>
	)
}
