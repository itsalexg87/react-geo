import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [active, setActive] = useState('');

	const linkStyle = 'bg-white w-full text-center mx-1 hover:bg-green-300';
	return (
		<div className='max-w-7xl flex justify-around mx-auto mb-4 border border-b-black'>
			<Link
				to='/flags'
				className={`${linkStyle} + ${active === 'flags' ? 'bg-green-300' : ''}`}
				onClick={() => setActive('flags')}>
				Flags
			</Link>
			<Link
				to='/capitals'
				className={`${linkStyle} + ${active === 'capitals' ? 'bg-green-300' : ''}`}
				onClick={() => setActive('capitals')}>
				Capitals
			</Link>
			<Link
				to='/bollards'
				className={`${linkStyle} + ${active === 'bollards' ? 'bg-green-300' : ''}`}
				onClick={() => setActive('bollards')}>
				Bollards
			</Link>
			<Link
				to='/cars'
				className={`${linkStyle} + ${active === 'cars' ? 'bg-green-300' : ''}`}
				onClick={() => setActive('cars')}>
				Cars
			</Link>
			{/* <Link to='/utilitypoles'>Utility Poles</Link>
			<Link to='/roadlines'>Road Lines</Link> */}
		</div>
	);
}
