/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Logo from './logo/new-logo-color.png'
import './App.css'
import { Layout, Navigation, Content, Drawer } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'
// import Mailto from 'react-protected-mailto'
// import Contact from './components/contact'

const navstyle = {
  width: '100%',
  textAlign: 'center',
  marginTop: '30%',
  position: 'relative'
}
const linkstyle = {
  color: '#48E2BC',
  fontFamily: 'monospace',
  fontSize: '25px',
  lineHeight: '30px'
}

class App extends Component {
  hideToggle () {
    var selectorId = document.querySelector('.mdl-layout')
    selectorId.MaterialLayout.toggleDrawer()
  }
  render () {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Drawer style={{ backgroundColor: '#fff' }}>
            <Link to='/' onClick={() => { this.hideToggle() }}>
              <img src={Logo} style={{ width: '50%', color: '#8e8d8a' }} />
            </Link>
            <Navigation className='nav-bar' style={navstyle}>
              <Link style={linkstyle} to='/' onClick={() => { this.hideToggle() }}>Home</Link>
              <Link style={linkstyle} to='/about' onClick={() => { this.hideToggle() }}>About me</Link>
              {/* <Link style={linkstyle} to='/skills' onClick={() => { this.hideToggle() }}>Skills</Link> */}
              <Link style={linkstyle} to='/projects' onClick={() => { this.hideToggle() }}>Projects</Link>
              {/* <Link style={linkstyle} to='/contact' onClick={() => { this.hideToggle() }}>Contact me</Link> */}
              {/* <Link style={linkstyle} to='/' target='_blank'>Contact me</Link> */}

            
              <p ><a style={linkstyle} href="mailto:patrizio.sbardella@web.de" target='_blank'>Contact me </a></p>
              

{/* 


                <Mailto
                  email='patrizio.sbardella@web.de'
                  href='obfuscated'
                  // href='patrizio.sbardella@web.de'
                  headers={
                    { subject: 'prova' },
                    { cc: '' }
                  } /> */}

             
            </Navigation>
          </Drawer>

          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
