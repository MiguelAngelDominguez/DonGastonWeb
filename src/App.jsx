import { useState } from 'react'
import * as React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import SalesPage from './pages/SalesPage.tsx';
import ProductInfo from './pages/ProductInfo';

import './App.css'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<SalesPage />} />
				<Route path='/product/:id' element={<ProductInfo/>} />
			</Routes>
		</>
	)
}

export default App;