"use strict";
const Constants = require ("../../../Constants");
const VictimofNightBase = require("../setDDQ/VictimofNight");

class VictimofNight extends VictimofNightBase {
  constructor(game) {
    super(game, "Victim of Night", "Innistrad", "ISD");
  }
}

module.exports = VictimofNight;
