"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimevalShambler extends Card {
  constructor(game) {
    super(game, "Primeval Shambler", "Eighth Edition", "8ED");
  }
}

module.exports = PrimevalShambler;
