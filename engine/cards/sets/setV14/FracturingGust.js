"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FracturingGust extends Card {
  constructor(game) {
    super(game, "Fracturing Gust", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = FracturingGust;
