"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FracturingGust extends UnimplementedCard {
  constructor (game) {
    super(game, "Fracturing Gust", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = FracturingGust;
