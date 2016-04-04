"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainStasis extends Card {
  constructor(game) {
    super(game, "Chain Stasis", "Homelands", "HML");
  }
}

module.exports = ChainStasis;
