"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmugglersCopter extends UnimplementedCard {
  constructor (game) {
    super(game, "Smuggler's Copter", "Kaladesh", "KLD");
  }
}

module.exports = SmugglersCopter;
