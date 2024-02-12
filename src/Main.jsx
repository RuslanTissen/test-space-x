import React from 'react'
import Start from './components/start/Start.jsx'
import { Routes, Route } from "react-router-dom"

function Main() {
  return (
	 <main>     
		<Routes>
			<Route path="*" element={<Start/>}></Route>
			{/* <Route></Route>
			<Route></Route>
			<Route></Route>
			<Route></Route>
			<Route></Route> */}
		</Routes>
	 </main>
  )
}

export default Main