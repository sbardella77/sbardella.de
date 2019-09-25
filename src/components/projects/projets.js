/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import {Tabs,Tab,Grid,Cell,Card,CardTitle} from 'react-mdl'
import imgAlDodicesimo from '../../logo/aldodicesimo.jpg'
import './project.css'
import template from '../../logo/oie_ZywvR2an1uIg.png'
import imgJavascript from '../../logo/javascript_1.png'



class Project extends Component {
  state ={
    activeTab :0
  }

  toggleCategories(){
     
    if(this.state.activeTab === 0){
       return(
      <div className="projects-grid">   
      {/* 1st Project*/}
      <Card className="myContent" shadow={5} style={{ margin:'auto'}}>
       <a href='https://www.aldodicesimo.com/' target='_blank'>
          <CardTitle style={{cursor:'pointer',color:'#fff',height:'175px',background:`url(${imgAlDodicesimo}) center / cover`}}> 
         
          </CardTitle>
          </a>
            {/* <CardText className="card-text">
            <i className="fa fa-wordpress"></i>
            <i className="fa fa-html5"></i>
            <i className="fa fa-css3"></i>
           
            </CardText> */}
       </Card>
       
      { /* 2nd Project*/ }
        <Card className="myContent" shadow={5} style={{ margin:'auto'}}>
            <a href='https://sbardella77.github.io/onepage-site/' target='_blank'>
                <CardTitle style={{cursor:'pointer',color:'#fff',height:'175px',background:`url(${template}) center / cover`}}> 
                <h4>Template Page</h4>
                </CardTitle>
            </a>
                {/* <CardText className="card-text">
                <i className="fa fa-html5"></i>
                <i className="fa fa-css3"></i>
                </CardText> */}
        </Card>
        </div>
        )
      }
     else if(this.state.activeTab === 1){
        return(
        <div>
        <div>
        <Card className="myContent" shadow={5} style={{ margin:'auto'}}>
       <a href='https://sbardella77.github.io/KeyPress/' target='_blank'>
          <CardTitle style={{cursor:'pointer',color:'#fff',height:'175px',background:`url(${imgJavascript}) center / cover`}}> 
         
          </CardTitle>
          </a>

        {/* <CardText className="card-text" id="myCardText">
            <i className="fa fa-html5"></i>
            <i className="fa fa-css3"></i>
            <i className="fad fa-js-square"></i>
        </CardText> */}
       </Card>
        </div>
        </div>
        )
      }
    // else if(this.state.activeTab === 2){
    //     return(<div><h1 style={{color:'#48e2bc',margin:'auto'}}>Under Costruction</h1></div>)
    // }
    // else if(this.state.activeTab === 3){
    //   return(<div><h1 style={{color:'#48e2bc',margin:'auto'}}>Under Costruction</h1></div>)
    // }
}


  render () {
    return (
      <div className="project-tabs" id="myproyTab">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>HTML/CSS</Tab>
            <Tab>Javascript</Tab>
            {/* <Tab>ReactJs</Tab>
            <Tab>NodeJs</Tab> */}
          </Tabs>

            <Grid className='projects-grid' id="myProjCard">
              <Cell col={12}>
                  <div className="content" >
                    {this.toggleCategories()}
                  </div>
              </Cell>

            </Grid>
            
          
      </div>
    )
  }
}

export default Project
