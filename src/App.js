import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-container"> {/* Применяем класс для изменения фона */}
      <Header />
      <Footer />
    </div>
  );
}

export default App;