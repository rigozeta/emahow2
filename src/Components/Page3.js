import { useState, useEffect } from "react";

import Accordion from "./Accordion";

import '../scss/page3.scss'

function PageThree() {

    const [accordion, setAccordion] = useState([]);

    useEffect(()=>{
        let acc = [
            {
                title: "Lorem Ipmsum",
                content: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
                active: true
            },
            {
                title: "Lorem Ipmsum",
                content: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
                active: false
            },
            {
                title: "Lorem Ipmsum",
                content: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
                active: false
            },
            {
                title: "Lorem Ipmsum",
                content: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
                active: false
            },
            {
                title: "Lorem Ipmsum",
                content: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
                active: false
            },
        ];

        setAccordion(acc);
    },[])

    const updateAccordion = (acc) => {
        console.log("ACCC", acc)
        setAccordion([...acc]);
    }

    return (
        <div id="PageThree">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="m-5">NULLA IMPERDIET</h1>
                        <p className='m-3'>Vestibulum dapibus hendrerit nibh ut ornare.</p>
                        <blockquote>Sed porta. lorem a sodales rhoncus, neque ligula dictum libero. sit amet.</blockquote>
                    </div>
                    <div className="col-md-8 bg">
                        <Accordion content={accordion} update={updateAccordion}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageThree;