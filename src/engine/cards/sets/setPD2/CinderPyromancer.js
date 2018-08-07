"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Pyromancer", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = CinderPyromancer;
