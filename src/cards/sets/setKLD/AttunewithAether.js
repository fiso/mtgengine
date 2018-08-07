"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AttunewithAether extends UnimplementedCard {
  constructor (game) {
    super(game, "Attune with Aether", "Kaladesh", "KLD");
  }
}

module.exports = AttunewithAether;
