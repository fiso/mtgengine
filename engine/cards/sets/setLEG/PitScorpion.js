"use strict";
const Constants = require ("../../../Constants");
const PitScorpionBase = require("../set5ED/PitScorpion");

class PitScorpion extends PitScorpionBase {
  constructor(game) {
    super(game, "Pit Scorpion", "Legends", "LEG");
  }
}

module.exports = PitScorpion;
