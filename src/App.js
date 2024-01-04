// import logo from './logo.svg';
import './App.css';
import { ContactInfo } from './components/contact';
import {ContactForm} from './components/form';

function App() {
  return (
    <>
    <div className="App">
        <header className="App-header">
          <p>Enrim Eleifend dignissim bibendum</p>
          <h2>Id Trisque Id Metus Nulla</h2>
        </header>
    </div>
     {/* body is not a child of App */}
        <body>
            <div className = "halfContainer">
              <div className="whiteBox"><ContactInfo></ContactInfo></div>
            </div>
                {/* <div className = "infobox"> */}
            <div className = "halfContainer">
                <ContactForm></ContactForm>
            </div>
          {/* </div> */}
          {/* <a
            className="App-link"
            href="https://www.google.com/maps/place/El+Hato/@14.58485,-90.7183062,16z/data=!3m1!4b1!4m6!3m5!1s0x85890c3501fd1ca7:0xb591c48675c2176a!8m2!3d14.5833878!4d-90.7117137!16s%2Fg%2F1tykvq7d?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </body>
      
    </>
  );
}

export default App;
