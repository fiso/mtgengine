"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BehemothsHerald extends Card {
  constructor(game) {
    super(game, "Behemoth's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = BehemothsHerald;
