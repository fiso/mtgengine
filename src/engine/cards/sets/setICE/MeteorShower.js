"use strict";
const Constants = require ("../../../Constants");
const MeteorShowerBase = require("../setME2/MeteorShower");

class MeteorShower extends MeteorShowerBase {
  constructor (game) {
    super(game, "Meteor Shower", "Ice Age", "ICE");
  }
}

module.exports = MeteorShower;
