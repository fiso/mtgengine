"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrilliantUltimatum extends UnimplementedCard {
  constructor(game) {
    super(game, "Brilliant Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = BrilliantUltimatum;
