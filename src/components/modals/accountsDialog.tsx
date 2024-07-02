import { Dialog, DialogContent, DialogTrigger } from '@/hawkUI';
import { ReactNode } from 'react';

export function AccountsDialog({
	isRegister,
	children,
}: {
	isRegister?: boolean;
	children?: ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger>{isRegister ? 'Register' : 'Login'}</DialogTrigger>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
}
