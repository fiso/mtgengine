"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LovisaColdeyes extends UnimplementedCard {
  constructor (game) {
    super(game, "Lovisa Coldeyes", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = LovisaColdeyes;
