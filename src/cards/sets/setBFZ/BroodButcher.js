"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodButcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Brood Butcher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BroodButcher;
