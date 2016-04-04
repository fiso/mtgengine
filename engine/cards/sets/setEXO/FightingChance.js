"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FightingChance extends Card {
  constructor(game) {
    super(game, "Fighting Chance", "Exodus", "EXO");
  }
}

module.exports = FightingChance;
