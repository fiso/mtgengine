"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeareroftheHeavens extends Card {
  constructor(game) {
    super(game, "Bearer of the Heavens", "Journey into Nyx", "JOU");
  }
}

module.exports = BeareroftheHeavens;
