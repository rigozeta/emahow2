import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'

import '../scss/page2.scss'

function PageTwo() {
    return (
        <div id="PageTwo">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} className='img-fluid logo'/>

                        <h1 className="m-5">LOREM IPSUM DOLOR SIT</h1>
                        <p className='m-5'><Link to='/pagethree' className='btn'>BEGIN</Link></p>
                    </div>
                    <div className="col-md-8 bg">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTwo;