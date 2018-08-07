"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitchstoneWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Pitchstone Wall", "Torment", "TOR");
  }
}

module.exports = PitchstoneWall;
