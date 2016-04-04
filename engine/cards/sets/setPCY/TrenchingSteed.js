"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrenchingSteed extends Card {
  constructor(game) {
    super(game, "Trenching Steed", "Prophecy", "PCY");
  }
}

module.exports = TrenchingSteed;
