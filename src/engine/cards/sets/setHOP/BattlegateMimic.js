"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlegateMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlegate Mimic", "Planechase", "HOP");
  }
}

module.exports = BattlegateMimic;
