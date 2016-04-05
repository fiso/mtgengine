"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastingStation extends UnimplementedCard {
  constructor(game) {
    super(game, "Blasting Station", "Fifth Dawn", "5DN");
  }
}

module.exports = BlastingStation;
