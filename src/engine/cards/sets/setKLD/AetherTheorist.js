"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherTheorist extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Theorist", "Kaladesh", "KLD");
  }
}

module.exports = AetherTheorist;
