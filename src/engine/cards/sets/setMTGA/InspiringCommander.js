"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiring Commander", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = InspiringCommander;
