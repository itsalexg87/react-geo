import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// Data
import continentData from './data/continent.json';
import flagsData from './data/flags.json';
import bollardsData from './data/bollards.json';
import carsData from './data/cars.json';
// Lists
import FlagList from './components/flags/FlagList';
import BollardList from './components/bollards/BollardList';
import Counter from './components/Counter';
import CarList from './components/cars/CarList';
import CapitalList from './components/capitals/CapitalList';

function App() {
	const [count, setCount] = useState(null);
	const [continent, setContinent] = useState(null);

	const [flags, setFlags] = useState([]);
	const [bollards, setBollards] = useState([]);
	const [cars, setCars] = useState([]);

	useEffect(() => {
		// Continent is "all"
		if (continent === null) {
			// Dependent on Count
			if (count === null) {
				setFlags(flagsData.sort(() => Math.random() - 0.5).slice(0, flagsData.length));
				setBollards(bollardsData.sort(() => Math.random() - 0.5).slice(0, bollardsData.length));
				setCars(carsData.sort(() => Math.random() - 0.5).slice(0, carsData.length));
			} else {
				setFlags(flagsData.sort(() => Math.random() - 0.5).slice(0, count));
				setBollards(bollardsData.sort(() => Math.random() - 0.5).slice(0, count));
				setCars(carsData.sort(() => Math.random() - 0.5).slice(0, count));
			}
		} else {
			// If continent is set & count not set
			if (count === null) {
				setFlags(
					flagsData.filter(flag => continentData[continent].includes(flag.country.toLowerCase()))
				);
				setBollards(
					bollardsData.filter(bollard =>
						continentData[continent].includes(bollard.country.toLowerCase())
					)
				);
				setCars(carsData.filter(car => continentData[continent].includes(car.country.toLowerCase())));
			} else {
				// if continent ist set & count is set
				setFlags(
					flagsData
						.filter(flag => continentData[continent].includes(flag.country.toLowerCase()))
						.sort(() => Math.random() - 0.5)
						.slice(0, count)
				);
				setBollards(
					bollardsData
						.filter(bollard => continentData[continent].includes(bollard.country.toLowerCase()))
						.sort(() => Math.random() - 0.5)
						.slice(0, count)
				);
				setCars(
					carsData
						.filter(car => continentData[continent].includes(car.country.toLocaleLowerCase()))
						.sort(() => Math.random() - 0.5)
						.slice(0, count)
				);
			}
		}
	}, [continent, count]);

	return (
		<div className='bg-gray-200 min-h-screen'>
			<Header />
			<Counter setCount={setCount} setContinent={setContinent} />
			<Routes>
				<Route exact path='/' element={<FlagList flashcards={flags} />} />
				<Route path='/flags' element={<FlagList flashcards={flags} />} />
				<Route path='/capitals' element={<CapitalList flashcards={flags} />} />
				<Route path='/bollards' element={<BollardList flashcards={bollards} />} />
				<Route path='/cars' element={<CarList flashcards={cars} />} />
			</Routes>
		</div>
	);
}

export default App;
