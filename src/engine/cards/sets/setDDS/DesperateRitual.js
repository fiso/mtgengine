"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Ritual", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = DesperateRitual;
