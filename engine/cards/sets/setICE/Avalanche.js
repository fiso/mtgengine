"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Avalanche extends Card {
  constructor(game) {
    super(game, "Avalanche", "Ice Age", "ICE");
  }
}

module.exports = Avalanche;
