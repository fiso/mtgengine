"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranSkyknight extends Card {
  constructor(game) {
    super(game, "Kjeldoran Skyknight", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranSkyknight;
