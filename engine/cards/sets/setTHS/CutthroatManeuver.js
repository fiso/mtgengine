"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CutthroatManeuver extends Card {
  constructor(game) {
    super(game, "Cutthroat Maneuver", "Theros", "THS");
  }
}

module.exports = CutthroatManeuver;
