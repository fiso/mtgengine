"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrindingStation extends UnimplementedCard {
  constructor(game) {
    super(game, "Grinding Station", "Fifth Dawn", "5DN");
  }
}

module.exports = GrindingStation;
