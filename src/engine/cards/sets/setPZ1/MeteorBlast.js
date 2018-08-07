"use strict";
const Constants = require ("../../../Constants");
const MeteorBlastBase = require("../setCM2/MeteorBlast");

class MeteorBlast extends MeteorBlastBase {
  constructor (game) {
    super(game, "Meteor Blast", "Legendary Cube", "PZ1");
  }
}

module.exports = MeteorBlast;
