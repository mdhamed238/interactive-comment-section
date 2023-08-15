import { Comment } from '@/store/commentSlice';
import Image from 'next/image';
import LinkButton from './LinkButton';

type Props = {
	comment: Comment;
};

const CommentCard = ({ comment }: Props) => {
	return (
		<article className='relative bg-neutral-white p-4'>
			<div className='flex flex-col gap-2 items-start'>
				<header className='flex items-center gap-x-3'>
					<Image
						src={comment.user.image.png}
						alt='avatar'
						className='w-6 h-6'
					/>
					<h3 className='text-neutral-dark-blue font-semibold'>
						{comment.user.username}
					</h3>
					<span className='text-neutral-light-gray'>
						{comment.createdAt}
					</span>
				</header>
				<p className='text-neutral-dark-blue'>{comment.content}</p>
			</div>
			<LinkButton
				type='reply'
				className=''
				onClick={() => {}}
				title='Reply'
			/>
		</article>
	);
};

export default CommentCard;
