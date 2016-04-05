"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Foul Familiar", "Deckmasters", "DKM");
  }
}

module.exports = FoulFamiliar;
