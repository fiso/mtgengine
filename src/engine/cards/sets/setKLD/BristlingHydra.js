"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BristlingHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Bristling Hydra", "Kaladesh", "KLD");
  }
}

module.exports = BristlingHydra;
