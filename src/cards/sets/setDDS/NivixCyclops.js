"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NivixCyclops extends UnimplementedCard {
  constructor (game) {
    super(game, "Nivix Cyclops", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = NivixCyclops;
