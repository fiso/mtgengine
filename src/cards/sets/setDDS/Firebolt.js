"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firebolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Firebolt", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = Firebolt;
