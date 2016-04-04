"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WheelandDeal extends Card {
  constructor(game) {
    super(game, "Wheel and Deal", "Onslaught", "ONS");
  }
}

module.exports = WheelandDeal;
