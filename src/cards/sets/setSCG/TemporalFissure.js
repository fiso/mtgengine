"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalFissure extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Fissure", "Scourge", "SCG");
  }
}

module.exports = TemporalFissure;
