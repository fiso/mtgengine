"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConeofFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Cone of Flame", "Welcome Deck 2016", "W16");
  }
}

module.exports = ConeofFlame;
