"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriceofProgress extends Card {
  constructor(game) {
    super(game, "Price of Progress", "Exodus", "EXO");
  }
}

module.exports = PriceofProgress;
