import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="">
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)