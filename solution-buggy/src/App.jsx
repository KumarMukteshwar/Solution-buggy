// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudgetSelection from './components/BudgetSelection';
import BudgetDetails from './pages/BudgetDetails';
import BudgetReason from './pages/BudgetReason';
import BudgetBusiness from './pages/BudgetBusiness';
import ConnectForm from './pages/ContactForm';
import Buy from './pages/Buy';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BudgetSelection />} />
                <Route path="/budgetReason" element={<BudgetReason/>} />
                <Route path="/business-idea" element={<BudgetBusiness/>} />
                <Route path="/contact" element={<ConnectForm/>} />
                <Route path="/buy" element={<Buy/>} />
                <Route path="/budget/:budgetRange" element={<BudgetDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
