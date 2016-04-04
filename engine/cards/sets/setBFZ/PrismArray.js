"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismArray extends Card {
  constructor(game) {
    super(game, "Prism Array", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PrismArray;
