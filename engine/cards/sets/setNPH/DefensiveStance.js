"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefensiveStance extends UnimplementedCard {
  constructor(game) {
    super(game, "Defensive Stance", "New Phyrexia", "NPH");
  }
}

module.exports = DefensiveStance;
