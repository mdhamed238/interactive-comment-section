import { RootState } from '@/store';
import { setScreen } from '@/store/screenSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
	const {
		comment: { comments, currentUser },
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		const checkMobile = () => {
			if (window.innerWidth <= 640) {
				dispatch(setScreen('mobile'));
			} else {
				dispatch(setScreen('desktop'));
			}
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	return (
		<main className='w-full h-screen bg-neutral-very-light-gray flex items-center justify-between gap-6'></main>
	);
}
