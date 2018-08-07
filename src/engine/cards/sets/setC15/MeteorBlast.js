"use strict";
const Constants = require ("../../../Constants");
const MeteorBlastBase = require("../setCM2/MeteorBlast");

class MeteorBlast extends MeteorBlastBase {
  constructor (game) {
    super(game, "Meteor Blast", "Commander 2015", "C15");
  }
}

module.exports = MeteorBlast;
