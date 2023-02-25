import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import des pages
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'

// Import des composants
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.css'

function App() {
    return (
        <div>
            <div className="App">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="products/:id" element={<Product />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </div>
    )
}

export default App
