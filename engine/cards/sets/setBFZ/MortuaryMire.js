"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortuaryMire extends Card {
  constructor(game) {
    super(game, "Mortuary Mire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MortuaryMire;
