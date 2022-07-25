import React, { useState } from 'react';

export default function Flag({ flashcard }) {
	const [flip, setFlip] = useState(false);
	return (
		<div className='flex justify-center items-center h-56 select-none' onClick={() => setFlip(!flip)}>
			{!flip ? (
				<div className=''>
					<img
						className='h-44 w-fit'
						src={`https://flagcdn.com/w320/${flashcard.code.toLowerCase()}.png`}
						alt={flashcard.country}
					/>
				</div>
			) : (
				<div className='flex flex-col items-center text-center'>
					<span className='text-xl font-bold'>{flashcard.country}</span>
					<span className='text-lg'>{flashcard.capital}</span>
				</div>
			)}
		</div>
	);
}
