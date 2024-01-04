import React, { useState } from "react";

export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email) {
            setMessage("Please fill in your information.")
            } else {
                setMessage("Thank you for contacting us. We will get back to you soon.")
            }
        };
    // The (e) in the function means  that the function expects an "event" object to be passed as an argument

    return (
        <>
        <div className="contact-form">
            <h2>Purus Nallam Arcu Integer</h2>
            <p>
            Elementum nisi ac volupat vestibulum enim mi tincidunt eros sed justo<br></br>
            magna odio sed lactus ut non ante sit amet est luctus dictrum ut dolor
            ac.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text"
                    placeholder="Name"
                    className="nameInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input type="email"
                    placeholder="Email"
                    className="emailInput"
                    value ={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit" className="submitButton">
                    Submit
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    </>
    );
};