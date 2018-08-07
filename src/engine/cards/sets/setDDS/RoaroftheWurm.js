"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoaroftheWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Roar of the Wurm", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RoaroftheWurm;
