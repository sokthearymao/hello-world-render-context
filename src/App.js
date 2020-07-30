import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Terry punker">
          <ComponentC />
        </UserProvider>
        {/* <Counter> 
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount}/>
          )}
        </Counter>  */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Terry' : 'Guest' } /> */}
        {/* <ClickCounter name='Terry jerk' />
        <HoverCounter /> */}
        {/* ErrorBoundary will display an error and return a fallback UI */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary> 

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary> 
        
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>  */}
      </div>
    )
  }
}

export default App
