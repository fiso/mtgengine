"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SightedCasteSorcerer extends Card {
  constructor(game) {
    super(game, "Sighted-Caste Sorcerer", "Shards of Alara", "ALA");
  }
}

module.exports = SightedCasteSorcerer;
