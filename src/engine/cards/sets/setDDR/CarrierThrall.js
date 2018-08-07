"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrierThrall extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrier Thrall", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = CarrierThrall;
