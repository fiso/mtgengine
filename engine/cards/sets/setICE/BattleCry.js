"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleCry extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Cry", "Ice Age", "ICE");
  }
}

module.exports = BattleCry;
