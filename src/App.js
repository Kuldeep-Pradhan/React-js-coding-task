import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./pages/Form";
import Table from "./pages/Table";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/table" element={<Table/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
