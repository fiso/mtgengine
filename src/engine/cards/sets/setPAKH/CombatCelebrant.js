"use strict";
const Constants = require ("../../../Constants");
const CombatCelebrantBase = require("../setAKH/CombatCelebrant");

class CombatCelebrant extends CombatCelebrantBase {
  constructor (game) {
    super(game, "Combat Celebrant", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CombatCelebrant;
