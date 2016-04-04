"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismRing extends Card {
  constructor(game) {
    super(game, "Prism Ring", "Magic Origins", "ORI");
  }
}

module.exports = PrismRing;
