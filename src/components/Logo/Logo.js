import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0 dib">
            <Tilt>
                <div className="Tilt" style={{ height: '130px', width: '130px', backgroundColor: 'darkgreen' }}>
                    <img src={brain} alt="img" width='70px'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;    