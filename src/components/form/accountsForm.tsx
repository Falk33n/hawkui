'use client';

import {
	cn,
	Form,
	FormButton,
	FormField,
	FormItem,
	FormMessage,
	InputWithLabel,
} from '@/hawkUI';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

function capitalizeWords(str: string): string {
	return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

const zodSchema = {
	fName: z
		.string({ message: 'First Name must be a string' })
		.min(1, { message: 'First Name must be at least 1 character long' })
		.transform(capitalizeWords),
	lName: z
		.string({ message: 'Last Name must be a string' })
		.min(1, { message: 'Last Name must be at least 1 character long' })
		.transform(capitalizeWords),
	address: z
		.string({ message: 'Street Address must be a string' })
		.min(1, { message: 'Street Address must be at least 1 character long' })
		.transform(capitalizeWords),
	postalCode: z
		.string({ message: 'Postal Code must be a string' })
		.min(1, { message: 'Postal Code must be at least 1 character long' })
		.transform(capitalizeWords),
	city: z
		.string({ message: 'City must be a string' })
		.min(1, { message: 'City must be at least 1 character long' })
		.transform(capitalizeWords),
	country: z
		.string({ message: 'Country must be a string' })
		.min(1, { message: 'Country must be at least 1 character long' })
		.transform(capitalizeWords),
	email: z
		.string({ message: 'Email must be a string' })
		.email({ message: 'Email must be of a valid email format' })
		.min(4, { message: 'Last Name must be at least 4 characters long' }),
	psw: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' }),
	confirmPsw: z
		.string()
		.min(8, { message: 'Confirm Password must be at least 8 characters long' }),
};

export const AccountsForm = ({
	className,
	isRegister,
	...props
}: {
	className?: string;
	isRegister?: boolean;
}) => {
	const formSchema = isRegister
		? z
				.object({
					fName: zodSchema.fName,
					lName: zodSchema.lName,
					address: zodSchema.address,
					postalCode: zodSchema.postalCode,
					city: zodSchema.city,
					country: zodSchema.country,
					email: zodSchema.email,
					psw: zodSchema.psw,
					confirmPsw: zodSchema.confirmPsw,
				})
				.refine((data) => data.psw === data.confirmPsw, {
					message: 'Passwords do not match',
					path: ['confirmPsw'],
				})
		: z.object({
				email: zodSchema.email,
				psw: zodSchema.psw,
		  });

	const defaultValues = isRegister
		? {
				fName: '',
				lName: '',
				address: '',
				postalCode: '',
				city: '',
				country: '',
				email: '',
				psw: '',
				confirmPsw: '',
		  }
		: {
				email: '',
				psw: '',
		  };

	const formKeys = isRegister
		? [
				{ name: 'fName', label: 'First Name' },
				{ name: 'lName', label: 'Last Name' },
				{ name: 'address', label: 'Street Address' },
				{ name: 'postalCode', label: 'Postal Code' },
				{ name: 'city', label: 'City' },
				{ name: 'country', label: 'Country' },
				{ name: 'email', label: 'Email' },
				{ name: 'psw', label: 'Password' },
				{ name: 'confirmPsw', label: 'Confirm Password' },
		  ]
		: [
				{ name: 'email', label: 'Email' },
				{ name: 'psw', label: 'Password' },
		  ];

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				className={cn('space-y-7 w-full', className)}
				onSubmit={form.handleSubmit(onSubmit)}
				{...props}
			>
				<h2 className='font-semibold text-2xl text-center'>
					{isRegister ? 'Create an account' : 'Sign in'}
				</h2>
				<p className={cn('!mt-4 text-center text-sm')}>
					{isRegister ? 'Already have an account? ' : 'Not a member? '}
					<Link
						className='text-primary hover:underline-offset-[3px] hover:underline focus-visible:underline focus-visible:underline-offset-[3px]'
						href='/'
					>
						{isRegister ? 'Sign in' : 'Create an account'}
					</Link>
				</p>
				{formKeys.map((key, i) => (
					<FormField
						key={i}
						control={form.control}
						name={key.name as keyof z.infer<typeof formSchema>}
						render={({ field }) => (
							<>
								<FormItem className='relative'>
									<InputWithLabel
										label={key.label}
										field={field}
									/>
									<FormMessage className='pl-4' />
								</FormItem>
								{i === formKeys.length - 1 && <FormButton />}
							</>
						)}
					/>
				))}
				<p className='!mt-5 text-center text-muted-foreground text-sm'>
					By creating an account you agree to our{' '}
					<Link
						href=''
						className='text-foreground hover:text-primary focus-visible:text-primary underline underline-offset-[3px]'
					>
						terms
					</Link>{' '}
					and{' '}
					<Link
						href=''
						className='text-foreground hover:text-primary focus-visible:text-primary underline underline-offset-[3px]'
					>
						conditions
					</Link>{' '}
					and{' '}
					<Link
						href=''
						className='text-foreground hover:text-primary focus-visible:text-primary underline underline-offset-[3px]'
					>
						privacy policy
					</Link>
				</p>
			</form>
		</Form>
	);
};
AccountsForm.displayName = 'AccountsForm';
