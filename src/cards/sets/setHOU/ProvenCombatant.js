"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProvenCombatant extends UnimplementedCard {
  constructor (game) {
    super(game, "Proven Combatant", "Hour of Devastation", "HOU");
  }
}

module.exports = ProvenCombatant;
