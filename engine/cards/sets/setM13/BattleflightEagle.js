"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleflightEagle extends UnimplementedCard {
  constructor(game) {
    super(game, "Battleflight Eagle", "Magic 2013", "M13");
  }
}

module.exports = BattleflightEagle;
