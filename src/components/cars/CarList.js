import React from 'react';
import Car from './Car';

export default function CarList({ flashcards }) {
	return (
		<div className=''>
			<span className='flex justify-center mt-5 mb-0'>
				Showing:<span className='font-bold ml-2'>{flashcards.length}</span>
			</span>
			<div className='container'>
				{flashcards.map(flashcard => {
					return <Car flashcard={flashcard} key={flashcard.id} />;
				})}
			</div>
		</div>
	);
}
