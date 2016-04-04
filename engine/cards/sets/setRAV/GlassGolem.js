"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlassGolem extends Card {
  constructor(game) {
    super(game, "Glass Golem", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GlassGolem;
