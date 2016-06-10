"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalExtortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Extortion", "Planar Chaos", "PLC");
  }
}

module.exports = TemporalExtortion;
