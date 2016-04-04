"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CombatMedic extends Card {
  constructor(game) {
    super(game, "Combat Medic", "Anthologies", "ATH");
  }
}

module.exports = CombatMedic;
