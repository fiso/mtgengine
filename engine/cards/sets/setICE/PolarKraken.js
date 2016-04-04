"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PolarKraken extends Card {
  constructor(game) {
    super(game, "Polar Kraken", "Ice Age", "ICE");
  }
}

module.exports = PolarKraken;
