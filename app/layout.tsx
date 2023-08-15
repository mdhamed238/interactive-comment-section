import { store } from '@/store';
import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Provider } from 'react-redux';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Interactive comments section',
	description:
		'Engaging comments section with real-time interaction and dynamic user experience.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={rubik.className}>{children}</body>
		</html>
	);
}
