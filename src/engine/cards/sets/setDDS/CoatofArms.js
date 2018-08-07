"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoatofArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Coat of Arms", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = CoatofArms;
