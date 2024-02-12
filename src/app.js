import { Routes, Route, useLocation } from "react-router-dom";

import Menu from './Components/Menu';
import Home from './Components/Home';
import PageOne from './Components/Page1';
import PageTwo from './Components/Page2';
import PageThree from "./Components/Page3";

function App() {

    const isHome = () => {
        let loc = useLocation();
        if(loc.pathname === '/') {
            return true;
        }

        return false;
    }

    const getCurrentLocation = () => {
        let loc = useLocation();
        return loc.pathname;
    }

    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pageone" element={<PageOne />} />
                <Route path="/pagetwo" element={<PageTwo />} />
                <Route path="/pagethree" element={<PageThree />} />
            </Routes>            

            {!isHome() && (
                <Menu current={getCurrentLocation()}/>
            )}    
            
        </div>
        
    );
}

export default App;