"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandstoneOracle extends Card {
  constructor(game) {
    super(game, "Sandstone Oracle", "Commander 2015", "C15");
  }
}

module.exports = SandstoneOracle;
