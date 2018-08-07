"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadhaHeirtoKeld extends UnimplementedCard {
  constructor (game) {
    super(game, "Radha, Heir to Keld", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RadhaHeirtoKeld;
