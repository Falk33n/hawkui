import { cn } from '@/hawkUI';
import { FunctionComponent, LabelHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export const Label: FunctionComponent<
	LabelHTMLAttributes<HTMLLabelElement> & {
		isFocused?: boolean;
		error?: FieldError;
	}
> = ({ isFocused, error, className, ...props }) => {
	return (
		<label
			className={cn(
				'left-4 absolute transition-all z-[1]',
				!isFocused && !error && 'top-1/2 -translate-y-1/2',
				error && !isFocused && 'top-2',
				isFocused &&
					'-top-4 text-xs bg-background border-primary border-2 rounded-full px-1.5 py-0.5',
				error && 'border-destructive',
				className
			)}
			{...props}
		/>
	);
};
Label.displayName = 'Label';
