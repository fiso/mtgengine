"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FightingChance extends UnimplementedCard {
  constructor (game) {
    super(game, "Fighting Chance", "Exodus", "EXO");
  }
}

module.exports = FightingChance;
