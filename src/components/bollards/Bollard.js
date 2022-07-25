import React, { useState } from 'react';

export default function Bollard({ flashcard }) {
	const [flip, setFlip] = useState(false);
	return (
		<div className='flex justify-center items-center h-56 select-none' onClick={() => setFlip(!flip)}>
			{!flip ? (
				<div className=''>
					<img className='h-44 w-fit' src={flashcard.imageUrl} alt={flashcard.id} />
				</div>
			) : (
				<div className='flex flex-col items-center text-center'>
					<span className='text-xl font-bold'>{flashcard.country}</span>
				</div>
			)}
		</div>
	);
}
