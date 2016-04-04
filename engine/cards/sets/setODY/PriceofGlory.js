"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriceofGlory extends Card {
  constructor(game) {
    super(game, "Price of Glory", "Odyssey", "ODY");
  }
}

module.exports = PriceofGlory;
