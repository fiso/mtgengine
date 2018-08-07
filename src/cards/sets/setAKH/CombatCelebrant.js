"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CombatCelebrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Combat Celebrant", "Amonkhet", "AKH");
  }
}

module.exports = CombatCelebrant;
