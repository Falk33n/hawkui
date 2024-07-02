import { cn } from '@/hawkUI';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

export const Input = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement> & { error?: FieldError }
>(({ onFocus, onBlur, error, className, type, ...props }, ref) => {
	return (
		<input
			className={cn(
				'flex h-10 w-full rounded-md border border-input bg-input/20 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 z-0 relative',
				error && 'border-destructive focus-visible:ring-destructive',
				className
			)}
			type={type}
			onFocus={onFocus}
			onBlur={onBlur}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = 'Input';
