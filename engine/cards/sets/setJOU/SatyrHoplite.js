"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SatyrHoplite extends Card {
  constructor(game) {
    super(game, "Satyr Hoplite", "Journey into Nyx", "JOU");
  }
}

module.exports = SatyrHoplite;
