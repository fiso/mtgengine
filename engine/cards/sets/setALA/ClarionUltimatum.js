"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClarionUltimatum extends UnimplementedCard {
  constructor(game) {
    super(game, "Clarion Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = ClarionUltimatum;
