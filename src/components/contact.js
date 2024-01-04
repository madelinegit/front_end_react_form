import React from "react";
import './contact.css';

export const ContactInfo = () => {
    return (
        <>
            <div className = "info-box">
                <div><span className="emoji">&#128222;</span></div>
                <div> <b>Give us a call:</b><p>+00 (123) 456 7890</p> </div> </div>

            <div className="info-box">
                <div><span className="emoji">&#128232;</span></div>
                <div><b>Send us a mail:</b><p>support@domain.com</p></div>
            </div>

            <div className="info-box">
                <div>{<span className="emoji">&#128205;</span>}</div>
                <div><b>Come visit us:</b>
                    <p>
                        <a href="https://www.google.com/maps/place/El+Hato/@14.58485,-90.7183062,16z/data=!3m1!4b1!4m6!3m5!1s0x85890c3501fd1ca7:0xb591c48675c2176a!8m2!3d14.5833878!4d-90.7117137!16s%2Fg%2F1tykvq7d?entry=ttu">Directions to our location</a>
                    </p>
                </div>
            </div>
        </>
    );
};