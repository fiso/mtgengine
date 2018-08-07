"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Mastery", "Modern Masters 2017", "MM3");
  }
}

module.exports = TemporalMastery;
