"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClarionUltimatum extends Card {
  constructor(game) {
    super(game, "Clarion Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = ClarionUltimatum;
