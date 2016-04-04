"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VictimofNightBase = require("../setDDQ/VictimofNight.js");

class VictimofNight extends VictimofNightBase {
  constructor(game) {
    super(game, "Victim of Night", "Innistrad", "ISD");
  }
}

module.exports = VictimofNight;
