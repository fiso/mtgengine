"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeseechtheQueen extends Card {
  constructor(game) {
    super(game, "Beseech the Queen", "Planechase", "HOP");
  }
}

module.exports = BeseechtheQueen;
