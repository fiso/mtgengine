"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skullmulcher extends Card {
  constructor(game) {
    super(game, "Skullmulcher", "Shards of Alara", "ALA");
  }
}

module.exports = Skullmulcher;
