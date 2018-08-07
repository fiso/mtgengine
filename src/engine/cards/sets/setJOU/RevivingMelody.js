"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivingMelody extends UnimplementedCard {
  constructor (game) {
    super(game, "Reviving Melody", "Journey into Nyx", "JOU");
  }
}

module.exports = RevivingMelody;
