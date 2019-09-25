/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Avatar from '../../logo/myAvatar2.png'
import './landing.css'


class Landing extends Component {
  render () {
    return (
      <div style={{ width: '100%' }}>
        <Grid className='landing-grid' id='grid'>
          <Cell col={12} >
            <img
              className='avatar-img'
              src={Avatar}
              alt='avatar image'
            />
            <div className='banner-text'>
              <h1>Hello, I am <span /><span className='my-name' data-text='Patrizio'>Patrizio</span></h1>
              <h2>I am a Web Developer</h2>

              <div className='social-link'>
                <a href='https://www.linkedin.com/in/patrizio-sbardella-51b50643/' target='_blank'><i class='fa fa-linkedin' rel='noopener noreferrer' aria-hidden='true' /></a>
                <a href='https://github.com/sbardella77' target='_blank'><i class='fa fa-github-square' rel='noopener noreferrer' aria-hidden='true' /></a>
                <a href='https://www.xing.com/profile/Patrizio_Sbardella/cv' target='_blank'><i class='fa fa-xing-square' rel='noopener noreferrer' aria-hidden='true' /></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
