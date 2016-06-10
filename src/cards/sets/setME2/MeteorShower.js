"use strict";
const Constants = require ("../../../Constants");
const MeteorShowerBase = require("../setICE/MeteorShower");

class MeteorShower extends MeteorShowerBase {
  constructor (game) {
    super(game, "Meteor Shower", "Masters Edition II", "ME2");
  }
}

module.exports = MeteorShower;
