
import './App.css';
import { ContactInfo } from './components/contact';
import {ContactForm} from './components/form';

function App() {
  return (
    <>

    <div className="App">
        <header className="App-header">
          <p>Enrim Eleifend dignissim bibendum</p>
          <h1>Id Trisque Id Metus Nulla</h1>
        </header>
    </div>

     {/* body is not a child of App */}

    <body>

        <div className = "halfContainer">
          <div className="Box"><ContactInfo></ContactInfo></div>
        </div>

        <div className = "halfContainer">
            <ContactForm></ContactForm>
        </div>

    </body>

    </>
  );
}

export default App;
