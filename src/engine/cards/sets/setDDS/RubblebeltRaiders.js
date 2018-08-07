"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RubblebeltRaiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Rubblebelt Raiders", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RubblebeltRaiders;
