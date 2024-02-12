import arrow from '../assets/acc-arrow.svg'
import '../scss/accordion.scss'
function Accordion(props) {

    const setActive = (idx) => {
        let newAcc = props.content;

        newAcc.forEach((ac) => {
            ac.active = false;
        });

        newAcc[idx].active = true;

        props.update(newAcc);
    }
    
    return (
        <ul className="accordion">
            {props.content.map((item, idx) => 
                <li key={idx} className={(item.active ? 'active': '')} onClick={() => setActive(idx)}>
                    <div className='header'>{item.title} <span><img src={arrow} className='accordion-arrow' /></span></div>
                    <div className='content'>{item.content}</div>
                </li>
            )}
        </ul>
    )
}

export default Accordion;