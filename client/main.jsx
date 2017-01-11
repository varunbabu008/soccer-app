import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from '../imports/ui/App.jsx';

injectTapEventPlugin();

//runs meteor at the client
Meteor.startup(() =>{
  //we push the app component into main.html
  render(<App/>,document.getElementById('render-target'));
});