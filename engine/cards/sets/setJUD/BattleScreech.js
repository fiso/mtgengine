"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleScreech extends Card {
  constructor(game) {
    super(game, "Battle Screech", "Judgment", "JUD");
  }
}

module.exports = BattleScreech;
