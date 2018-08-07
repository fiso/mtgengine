"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlatantThievery extends UnimplementedCard {
  constructor (game) {
    super(game, "Blatant Thievery", "Explorers of Ixalan", "E02");
  }
}

module.exports = BlatantThievery;
