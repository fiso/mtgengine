"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitchstoneWall extends Card {
  constructor(game) {
    super(game, "Pitchstone Wall", "Torment", "TOR");
  }
}

module.exports = PitchstoneWall;
