"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleattheBridge extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle at the Bridge", "Aether Revolt", "AER");
  }
}

module.exports = BattleattheBridge;
