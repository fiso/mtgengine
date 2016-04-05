"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsFire extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul's Fire", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsFire;
