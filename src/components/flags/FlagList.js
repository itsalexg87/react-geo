import React from 'react';
import Flag from './Flag';

export default function FlagList({ flashcards }) {
	return (
		<div>
			<span className='flex justify-center mt-5 mb-0'>
				Showing:<span className='font-bold ml-2'>{flashcards.length}</span>
			</span>
			<div className='container'>
				{flashcards.map(flashcard => (
					<Flag flashcard={flashcard} key={flashcard.id} />
				))}
			</div>
		</div>
	);
}
