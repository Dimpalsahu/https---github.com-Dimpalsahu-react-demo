import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Counter from './components/count';
import Message from './components/message'
import FunctionClick from './components/functionclick'
import ClassClick from './components/classclick';
import EventBinding from './components/eventbinding'
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Namelistarray from './components/NameList'
import Stylsheet from './components/Stylsheet'
import Inline from './components/inline'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/table';
import PureCompo from './components/PureComponent';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroname="batman" />
        </ErrorBoundary>
        <ErrorBoundary> 
          <Hero heroname="supeman" />
          </ErrorBoundary>
        <ErrorBoundary> 
           <Hero heroname="joker" />
        </ErrorBoundary>

        {/* <PortalDemo />      <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo/> */}

        {/* <ParentComp /> */}
        {/* <PureCompo /> */}
        {/* <Table /> */}



        {/* <FragmentDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <Stylsheet primary={true} /> */}
        {/* <Inline /> */}
        {/* <Namelistarray /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick />
          <ClassClick /> */}
        {/* <EventBinding /> */}
        {/* <Counter/> */}
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

                 
                 <Message />  */}

      </div>
    );
  }
}
export default App;
