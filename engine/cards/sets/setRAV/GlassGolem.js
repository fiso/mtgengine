"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlassGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Glass Golem", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GlassGolem;
