import { AccountsDialog, AccountsForm, cn } from '@/hawkUI';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export const Accounts: FunctionComponent<
	HTMLAttributes<HTMLDivElement> & {
		children?: ReactNode;
		className?: string;
		isRegister?: boolean;
	}
> = ({ children, className, isRegister = true, ...props }) => {
	return (
		<AccountsDialog isRegister={isRegister}>
			<div
				className={cn(
					'p-4 min-h-screen flex flex-col items-center my-20',
					className
				)}
				{...props}
			>
				<AccountsForm isRegister={isRegister} />
				{children}
			</div>
		</AccountsDialog>
	);
};
Accounts.displayName = 'Accounts';
