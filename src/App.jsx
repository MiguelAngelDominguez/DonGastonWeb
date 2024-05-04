import { useState } from 'react'
import * as React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import SalesPage from './pages/SalesPage.tsx';

import './App.css'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<SalesPage />} />
			</Routes>
		</>
	)
}

export default App;