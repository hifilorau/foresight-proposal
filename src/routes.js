import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import PDFView from './components/PDF'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/pdf-view' component={ PDFView } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )