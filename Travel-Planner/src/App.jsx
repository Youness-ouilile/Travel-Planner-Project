import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignIn from './Pages/Sign-In';
import Home from './Pages/Home';
import NavItem from './NavItem'; 
import Search from './Pages/Search';


function App() {
  return (
    <Router>
      <div>
        <h1 className="translate-y-3 translate-x-20">
          <strong className="text-4xl font-kalam text-center mt-10 text-customOrange">Way</strong>
          <strong className="text-4xl font-kalam text-center mt-10 text-custbleu">ToGo</strong>
        </h1>

      
        <nav className='flex'>
          <ul className="flex space-x-16 translate-x-200 translate-y-55">
            
            <NavItem to="/" label="Home" translateX={0} translateY={102} />
            <NavItem to="/about" label="About" translateX={12} translateY={101} />
            <NavItem to="/contact" label="Contact" translateX={13} translateY={100} />
            <NavItem to="/sign-in" label="Sign In" translateX={14} translateY={103} />
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/search" element={<Search />} />
        
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
