"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CombatMedic extends UnimplementedCard {
  constructor (game) {
    super(game, "Combat Medic", "Masters Edition II", "ME2");
  }
}

module.exports = CombatMedic;
