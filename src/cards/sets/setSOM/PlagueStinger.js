"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueStinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Stinger", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlagueStinger;
