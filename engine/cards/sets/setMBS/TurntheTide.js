"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurntheTideBase = require("../setCNS/TurntheTide.js");

class TurntheTide extends TurntheTideBase {
  constructor(game) {
    super(game, "Turn the Tide", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TurntheTide;
