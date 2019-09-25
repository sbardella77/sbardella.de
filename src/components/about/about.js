import React, { Component } from 'react'
import { Grid, Cell, Tab, Tabs } from 'react-mdl'
import { Link } from 'react-router-dom'
import Foto from '../../logo/patrizio_trasparente.jpg'
import './about.css'
import CV from '../../logo/Sbardella_Patrizio_CV.pdf'

class About extends Component {
 state = {
    activeTab:0,
    
 }

 toggleCategories(){
  if(this.state.activeTab === 0){
    return(
   <div className="about-grid">   
   <h1> It's me</h1>
    <p>My name is Patrizio I come from Italy 42 years old.<br/>
I'm married and I have 7 beautiful children.<br/>
Currently living with my awesome Family in Duesseldorf.<br/>
I forget<br/>.......I'm also a Web Developer</p>
<Link to={CV} target="_blank" download className="download-file">Download my CV</Link>
    </div>
    )}else if(this.state.activeTab === 1){
     return(
    <div className="about-grid">   
    <h1> A Passion is Born</h1>
     <p>Training as an object-oriented programming developer. I learned programming      languages like Java (it was a new language with the Visual Code development environment), Visual Basic, SQL for relational databases. In this period I discover my passion for the developing</p>
     </div>
     )} else if(this.state.activeTab === 2){
      return(
        <div className="about-grid">   
        <h1>The Road in my job-life is marked</h1>
         <p>During this time I was able to increase my passion for economics and information technology. Working with SAP-CO, SAP-FI, analyzing and developing three-year Budget and Forecast plans of Telespazio Spa</p>
        </div>

      )}else if (this.state.activeTab === 3){
        return(
          <div className="about-grid">   
          <h1>Given to others</h1>
           <p>Missionary volunteer in Kenya. In his daily routine I helped the poor in the slums of Mombasa. at this time I learned to get out of myself and see others in their difficulties and help them!</p>
          </div>
  
        )
      }else if (this.state.activeTab === 4){
        return(
          <div className="about-grid">   
          <h1>...new Challenge</h1>
           <p>at 42 I find myself studying again. Am I too old? I don't know ! this is a challenge! and I like the challenges !</p>
          </div>
  
        )
      }
    }


render () {
  return (
    <div>
      <Grid>
        {/* Begin of the Left Side*/}
        <Cell col={5} >
          <div className='about-foto'>
            <img src={Foto} alt='Patrizio Sbardella' />
            
        </div>
        </Cell>
        {/* End of the Left Side*/}
        {/* Begin of the Right Side*/}
        <Cell className='about-right-col' col={7}>

              <Tabs 
              activeTab={this.state.activeTab} 
              onChange={(tabId) => this.setState({ activeTab: tabId })} id="myTab" >
                  <Tab>About me</Tab>
                  <Tab>1998 - 2003</Tab>
                  <Tab>2004 - 2010</Tab>
                  <Tab>2011 - 2013</Tab>
                  <Tab>Right Now</Tab>
              </Tabs>
              <section>
                  <div className="about-content">{this.toggleCategories()}
                  </div>
             
              </section>


        </Cell>
        {/* End of the Right Side*/}
      </Grid>
    </div>
  )
}
}



export default About
