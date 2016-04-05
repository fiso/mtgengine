"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedlingCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Seedling Charm", "Mirage", "MIR");
  }
}

module.exports = SeedlingCharm;
