"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BroodButcher extends Card {
  constructor(game) {
    super(game, "Brood Butcher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BroodButcher;
