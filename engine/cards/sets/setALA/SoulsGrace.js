"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsGrace extends Card {
  constructor(game) {
    super(game, "Soul's Grace", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsGrace;
