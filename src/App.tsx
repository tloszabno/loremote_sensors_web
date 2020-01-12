import React from "react";
import { SensorsBoard } from "./components/SensorsBoard";

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <SensorsBoard />
    </div>
  );
};

export default App;
