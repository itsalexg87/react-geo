import React, { useState } from 'react';

export default function Capital({ flashcard }) {
	const [flip, setFlip] = useState(false);
	return (
		<div
			className='flex justify-center items-center h-56 select-none border border-black text-center p-3 m-2'
			onClick={() => setFlip(!flip)}>
			{!flip ? (
				<div className=''>
					<span className='text-xl font-bold text-center'>{flashcard.country}</span>
				</div>
			) : (
				<div className='flex flex-col items-center'>
					<span className='text-lg font-bold mb-3'>{flashcard.capital}</span>
					<img
						className='h-44 w-fit'
						src={`https://flagcdn.com/w320/${flashcard.code.toLowerCase()}.png`}
						alt={flashcard.country}
					/>
				</div>
			)}
		</div>
	);
}
