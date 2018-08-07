"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleRampart extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Rampart", "Battlebond", "BBD");
  }
}

module.exports = BattleRampart;
