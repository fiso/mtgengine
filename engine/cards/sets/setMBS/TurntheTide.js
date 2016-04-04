"use strict";
const Constants = require ("../../../Constants");
const TurntheTideBase = require("../setCNS/TurntheTide");

class TurntheTide extends TurntheTideBase {
  constructor(game) {
    super(game, "Turn the Tide", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TurntheTide;
