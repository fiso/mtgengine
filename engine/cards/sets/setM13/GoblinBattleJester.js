"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBattleJester extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Battle Jester", "Magic 2013", "M13");
  }
}

module.exports = GoblinBattleJester;
