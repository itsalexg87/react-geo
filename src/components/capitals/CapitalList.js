import React from 'react';
import Capital from './Capital';

export default function CapitalList({ flashcards }) {
	return (
		<div className=''>
			<span className='flex justify-center mt-5 mb-0'>
				Showing:<span className='font-bold ml-2'>{flashcards.length}</span>
			</span>
			<div className='container'>
				{flashcards.map(flashcard => (
					<Capital flashcard={flashcard} key={flashcard.id} />
				))}
			</div>
		</div>
	);
}
