import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'

import '../scss/page1.scss'

function PageOne() {
    return (
        <div id="PageOne">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} className='img-fluid logo'/>

                        <p>lOREM iPSUM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.</p>
                        <p>Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.</p>
                        <p>Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.</p>
                    </div>
                    <div className="col-md-8 bg">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOne;