"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoilingEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Boiling Earth", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BoilingEarth;
