"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DireWolves extends Card {
  constructor(game) {
    super(game, "Dire Wolves", "Ice Age", "ICE");
  }
}

module.exports = DireWolves;
