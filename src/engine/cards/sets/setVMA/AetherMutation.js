"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Mutation", "Vintage Masters", "VMA");
  }
}

module.exports = AetherMutation;
