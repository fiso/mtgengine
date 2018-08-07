"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProvenCombatantToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Proven Combatant Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = ProvenCombatantToken;
