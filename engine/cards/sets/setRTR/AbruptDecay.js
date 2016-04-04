"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbruptDecay extends Card {
  constructor(game) {
    super(game, "Abrupt Decay", "Return to Ravnica", "RTR");
  }
}

module.exports = AbruptDecay;
