"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FracturingGust extends UnimplementedCard {
  constructor (game) {
    super(game, "Fracturing Gust", "From the Vault: Annihilation", "V14");
  }
}

module.exports = FracturingGust;
