
import './App.css';
import { ContactInfo } from './components/contact';
import {ContactForm} from './components/form';

function App() {
  return (
    <>

    <div className="App">
        <header className="App-header">
          <p>Enrim Eleifend dignissim bibendum</p>
          <p class= "header">Id Trisque Id Metus Nulla</p>
        </header>
</div>

     {/* body is not a child of App */}

    <body>

        <div className = "halfContainer">
          <ContactInfo></ContactInfo>
        </div>

        <div className = "halfContainer">
            <ContactForm></ContactForm>
        </div>

    </body>
{/* </div> */}
    </>
  );
}

export default App;
