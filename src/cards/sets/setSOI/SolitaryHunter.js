"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolitaryHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Solitary Hunter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SolitaryHunter;
