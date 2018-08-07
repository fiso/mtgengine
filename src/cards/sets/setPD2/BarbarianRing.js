"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbarian Ring", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BarbarianRing;
