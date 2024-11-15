import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './component/Mainpage';
import Mealinfo from './component/Mealinfo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* Update this route to match '/recipe/:mealid' */}
        <Route path="/recipe/:mealid" element={<Mealinfo />} />
      </Routes>
    </>
  );
}

export default App;
