import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Counter from './components/count';
import Message from './components/message';
class App extends Component {
  render(){
  return (
    <div className="App">
  <Counter/>
      {/* <Hello></Hello>
      <Hello></Hello>
      <Greet name="joy" heroname="batman">
                  <p>This is children prop</p>
                  <button>Action</button>
                </Greet> */}
                {/* <Greet name="harry" heroname="superman"/>
                <Greet name="mark" heroname="person"/>
                 <Welcome name="harry" heroname="superman"></Welcome>
                 <Welcome name="harry" heroname="superman"></Welcome>

                 
                 <Message /> */}
    
    </div>
  );
}
}
export default App;
