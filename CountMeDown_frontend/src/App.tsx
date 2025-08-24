
import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Introduction from './pages/Introduction';

function App() {


  return (
  <Router>
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/home" element={<Home />}> </Route>
    </Routes>
  </Router>
      
  )
}

export default App
