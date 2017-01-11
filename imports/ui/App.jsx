import React, {Component} from 'react';
//import {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <RaisedButton label="Oh yeah we did it" />
          
      </MuiThemeProvider>
    )
  }
}
