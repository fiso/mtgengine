"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsFire extends Card {
  constructor(game) {
    super(game, "Soul's Fire", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsFire;
