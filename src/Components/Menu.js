import { Link } from "react-router-dom";
import '../scss/menu.scss';

function Menu(prop) {
    return (
        <div className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pageone" className={(prop.current == '/pageone' ? 'active' : '')}>Topic 1</Link></li>
                <li><Link to="/pagetwo" className={(prop.current == '/pagetwo' ? 'active' : '')}>Topic 2</Link></li>
                <li><Link to="/pagethree" className={(prop.current == '/pagethree' ? 'active' : '')}>Topic 3</Link></li>
                <li><a href='#'>Topic 4</a></li>
                <li><a href='#'>Topic 5</a></li>
            </ul>
        </div>
    )
}

export default Menu;