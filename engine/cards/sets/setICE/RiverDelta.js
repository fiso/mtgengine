"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiverDelta extends Card {
  constructor(game) {
    super(game, "River Delta", "Ice Age", "ICE");
  }
}

module.exports = RiverDelta;
