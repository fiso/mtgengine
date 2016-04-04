"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortuaryMire extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortuary Mire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MortuaryMire;
