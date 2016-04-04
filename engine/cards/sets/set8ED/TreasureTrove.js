"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasureTrove extends Card {
  constructor(game) {
    super(game, "Treasure Trove", "Eighth Edition", "8ED");
  }
}

module.exports = TreasureTrove;
