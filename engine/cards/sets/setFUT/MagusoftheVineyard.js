"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheVineyard extends Card {
  constructor(game) {
    super(game, "Magus of the Vineyard", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheVineyard;
