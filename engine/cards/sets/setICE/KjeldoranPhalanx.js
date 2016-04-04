"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranPhalanx extends Card {
  constructor(game) {
    super(game, "Kjeldoran Phalanx", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranPhalanx;
