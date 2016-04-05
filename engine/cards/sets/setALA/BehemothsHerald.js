"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BehemothsHerald extends UnimplementedCard {
  constructor(game) {
    super(game, "Behemoth's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = BehemothsHerald;
