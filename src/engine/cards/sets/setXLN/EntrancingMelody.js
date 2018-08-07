"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntrancingMelody extends UnimplementedCard {
  constructor (game) {
    super(game, "Entrancing Melody", "Ixalan", "XLN");
  }
}

module.exports = EntrancingMelody;
