import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Flowbite } from 'flowbite-react';
import ShortcutTable from './components/Table';
import Hero from './components/Hero';
import FooterBar from './components/FooterBar';


function Main() {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div>
        <Hero />
        <ShortcutTable />
      </div>

      <div>
        <FooterBar />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Flowbite>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Flowbite>
  );
}

