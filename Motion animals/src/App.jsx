import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow: hidden;
`

const App = () => {
  return (
  <Router>
    <Section>
     <GlobalStyles/>
    <AnimatePresence exitBeforeEnter>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
      </Switch>
    </AnimatePresence>
    </Section>
  </Router>
    
  );
}

export default App