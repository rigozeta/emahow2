import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'
import globe from '../assets/globe.svg'
import hand from '../assets/hand-pointer.svg'

import '../scss/home.scss'

function App() {
    return (
        <div id="Home">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 logo-container">
                        <h1>LOREM IPSUM</h1>
                        <img src={logo} alt="logo" className='img-fluid logo' />
                        <p>
                            <Link to="/pageone"><img src={hand} className='hand' /> Click begin to get started</Link>
                        </p>
                    </div>
                    <div className="col-md-8 col-sm-12 globe-container">
                        <img src={globe} alt="globe" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;