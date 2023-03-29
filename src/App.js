import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Help from "./components/Help";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default App;
