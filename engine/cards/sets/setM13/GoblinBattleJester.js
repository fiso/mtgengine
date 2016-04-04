"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBattleJester extends Card {
  constructor(game) {
    super(game, "Goblin Battle Jester", "Magic 2013", "M13");
  }
}

module.exports = GoblinBattleJester;
