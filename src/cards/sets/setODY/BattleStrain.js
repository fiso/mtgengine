"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleStrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Strain", "Odyssey", "ODY");
  }
}

module.exports = BattleStrain;
