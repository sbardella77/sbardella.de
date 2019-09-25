import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landing/landing'
import About from './about/about'
// import Contact from './contact'
import Project from './projects/projets'
import Skills from './skills'
// import Resume from './resume'

const Main = () => (
  // <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/about' component={About} />
    <Route path='/skills' component={Skills} />
    <Route path='/projects' component={Project} />
    {/* <Route path='/resume' component={Resume} /> */}
    {/* <Route path='/contact' component={Contact} /> */}
  </Switch>
  // </BrowserRouter>

)

export default Main
