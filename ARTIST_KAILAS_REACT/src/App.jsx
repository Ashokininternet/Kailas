import { AnimationPage } from './AnimationPage';
import { CraftsPage } from './CraftsPage';
import { Routes, Route } from 'react-router';
import './App.css'
import HomePage from './HomePage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/animation" element={<AnimationPage />} />
        {/* <Route path="/crafts" element={<CraftsPage />} /> */}
      </Routes>
  )
}

export default App
