"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleScreech extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Screech", "Vintage Masters", "VMA");
  }
}

module.exports = BattleScreech;
