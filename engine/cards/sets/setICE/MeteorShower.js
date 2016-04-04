"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeteorShower extends Card {
  constructor(game) {
    super(game, "Meteor Shower", "Ice Age", "ICE");
  }
}

module.exports = MeteorShower;
