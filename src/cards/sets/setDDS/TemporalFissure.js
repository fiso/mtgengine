"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalFissure extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporal Fissure", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = TemporalFissure;
