"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalConditioning extends Card {
  constructor(game) {
    super(game, "Cabal Conditioning", "Scourge", "SCG");
  }
}

module.exports = CabalConditioning;
