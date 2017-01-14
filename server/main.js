import { Meteor } from 'meteor/meteor';
import {Players} from '../imports/api/players.js';

Meteor.startup(() => {
  Meteor.publish('players',function(){
    return players.find({});
  })
});
