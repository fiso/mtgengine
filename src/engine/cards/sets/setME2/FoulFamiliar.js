"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Familiar", "Masters Edition II", "ME2");
  }
}

module.exports = FoulFamiliar;
