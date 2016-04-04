"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavernThoctar extends Card {
  constructor(game) {
    super(game, "Cavern Thoctar", "Shards of Alara", "ALA");
  }
}

module.exports = CavernThoctar;
