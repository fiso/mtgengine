"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CombatMedic extends UnimplementedCard {
  constructor(game) {
    super(game, "Combat Medic", "Anthologies", "ATH");
  }
}

module.exports = CombatMedic;
