import React from 'react';

export default function Counter({ setCount, setContinent }) {
	return (
		<div className='flex flex-col justify-around max-w-xs mx-auto'>
			<div className='flex justify-around mb-2'>
				Count:{' '}
				<input
					className='flex-1 mx-5'
					type='number'
					min={1}
					onChange={e => (e.target.value === '' ? setCount(null) : setCount(parseInt(e.target.value)))}
				/>
				<button onClick={() => setCount(null)}>All</button>
			</div>
			<div className='flex justify-around'>
				Continent:{' '}
				<select
					className='flex-1 mx-5'
					name='continent'
					id='continent'
					onChange={e => {
						e.target.value === 'all' ? setContinent(null) : setContinent(e.target.value);
					}}>
					<option value='all'>All</option>
					<option value='africa'>Africa</option>
					<option value='europe'>Europe</option>
					<option value='asia'>Asia</option>
					<option value='oceania'>Oceania</option>
					<option value='northAmerica'>North America</option>
					<option value='southAmerica'>South America</option>
					<option value='idontknow'>I don't know</option>
					<option value='stillhard'>Still hard</option>
				</select>
				<button onClick={() => setCount(null)}>All</button>
			</div>
		</div>
	);
}
