"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Mastery", "Avacyn Restored", "AVR");
  }
}

module.exports = TemporalMastery;
