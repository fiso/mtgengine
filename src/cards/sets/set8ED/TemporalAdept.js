"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Temporal Adept", "Eighth Edition", "8ED");
  }
}

module.exports = TemporalAdept;
