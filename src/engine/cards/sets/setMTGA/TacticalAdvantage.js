"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TacticalAdvantage extends UnimplementedCard {
  constructor (game) {
    super(game, "Tactical Advantage", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = TacticalAdvantage;
