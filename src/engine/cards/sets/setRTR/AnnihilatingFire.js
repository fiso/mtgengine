"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnnihilatingFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Annihilating Fire", "Return to Ravnica", "RTR");
  }
}

module.exports = AnnihilatingFire;
