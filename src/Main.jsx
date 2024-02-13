import React from 'react'
import Start from './components/start/Start.jsx'
import { Routes, Route } from "react-router-dom"
import Technology from './components/Routes/technology/Technology.jsx'
import Flightplan from "./components/Routes/flightplan/Flightplan.jsx"
import Guarantees from "./components/Routes/guarantees/Guarantees.jsx"
import About from "./components/Routes/about/About.jsx"
import Contacts from "./components/Routes/contact/Contact.jsx"

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />}></Route>
				<Route path="Technology" element={<Technology />} />
				<Route path='Flightplan' element={<Flightplan/> }></Route>
				<Route path='Guarantees' element={<Guarantees/> }></Route>
				<Route path='About' element={<About/> }></Route>
				<Route path='Contacts' element={<Contacts/> }></Route>
				{/* <Route path='' element={ }></Route> */}
			</Routes>
		</main>
	)
}

export default Main