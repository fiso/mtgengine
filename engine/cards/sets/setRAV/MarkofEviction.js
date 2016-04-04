"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofEviction extends UnimplementedCard {
  constructor(game) {
    super(game, "Mark of Eviction", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MarkofEviction;
