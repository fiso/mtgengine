"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalTrespass extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Trespass", "Fate Reforged", "FRF");
  }
}

module.exports = TemporalTrespass;
