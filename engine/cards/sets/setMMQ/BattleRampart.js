"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleRampart extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Rampart", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleRampart;
