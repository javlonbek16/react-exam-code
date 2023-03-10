import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage, PruductsPage } from "./pages"
import ChartItem from './components/ChartItem';
import WishList from './components/WishList';
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <BrowserRouter>

        <div className='mt-12' >
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<PruductsPage />} />
          <Route path="/chart" element={<ChartItem />} />
          <Route path="/wishList" element={<WishList />} />
          {/* <Route path="/enter" element={<Enter />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
