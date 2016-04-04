"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JestersMask extends Card {
  constructor(game) {
    super(game, "Jester's Mask", "Ice Age", "ICE");
  }
}

module.exports = JestersMask;
