"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleStrain extends Card {
  constructor(game) {
    super(game, "Battle Strain", "Odyssey", "ODY");
  }
}

module.exports = BattleStrain;
