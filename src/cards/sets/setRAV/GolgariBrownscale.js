"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariBrownscale extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Brownscale", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariBrownscale;
