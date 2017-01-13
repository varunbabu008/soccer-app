import React, {Component} from 'react';
//import {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';


import TeamList from './Team-list'; 
import Teamstats from './Team-stats';
import Player from './Player'

export default class App extends Component{

  constructor(props){
    super(props);
    //setting up the state
    this.state={players:[]};
  }

  componentWillMount(){
    this.setState({players:[{
      _id: 1,
      name:"varun",
      ballManipulation: 2,
      kickingAbilities: 3,
      passingAbilities:1 ,
      duelTackling: 2,
      fieldCoverage: 3,
      blockingAbilities: 1,
      gameStrategy: 2,
      playMakingRisks: 1
    },
    {
      _id: 2,
      name:"Nishit",
      ballManipulation: 2,
      kickingAbilities: 3,
      passingAbilities:1 ,
      duelTackling: 2,
      fieldCoverage: 3,
      blockingAbilities: 1,
      gameStrategy: 2,
      playMakingRisks: 1
    },
    {
      _id: 3,
      name:"Rana",
      ballManipulation: 2,
      kickingAbilities: 3,
      passingAbilities:1 ,
      duelTackling: 2,
      fieldCoverage: 3,
      blockingAbilities: 1,
      gameStrategy: 2,
      playMakingRisks: 1
    }
    ]});
  }
  
  renderPlayers(){
    return this.state.players.map((player) =>(
      <TeamList key={player._id} player={player}/>
    ));
  }
  render(){
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar title="Soccer Application"
          iconClassNameRight = "muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}/>
          <div className="row">
            <div className = "col s12 m7"><Player/></div>
            <div className = "col s12 m5">
              <h2>Team List</h2>
              <Divider/>          
              <List>
                {this.renderPlayers()}
              </List>
              <Divider/>

            </div>
            <div className = "col s12 m5"><Teamstats/></div>
            
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
