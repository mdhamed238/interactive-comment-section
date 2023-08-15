import { classNames } from '@/utils';
import Image from 'next/image';

type Props = {
	title: string;
	type: 'edit' | 'reply' | 'delete';
	onClick: () => void;
	className: string;
};

const LinkButton = ({ title, type, onClick, className }: Props) => {
	let icon;

	if (type === 'delete') {
		icon = require('@/public/images/icon-delete.svg');
	} else if (type === 'edit') {
		icon = require('@/public/images/icon-edit.svg');
	} else {
		icon = require('@/public/images/icon-reply.svg');
	}

	return (
		<button
			className={classNames(
				'bg-transparent border-none hover:opacity-60 focus:outline-none font-bold',
				type === 'delete'
					? 'text-primary-soft-red'
					: 'text-primary-moderate-blue',
				className
			)}
			onClick={onClick}
		>
			<Image
				src={icon}
				alt='Icon'
				className={
					type === 'delete'
						? 'text-primary-soft-red'
						: 'text-primary-moderate-blue'
				}
			/>
			{title}
		</button>
	);
};

export default LinkButton;
