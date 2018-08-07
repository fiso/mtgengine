"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Adept", "Ninth Edition", "9ED");
  }
}

module.exports = TemporalAdept;
