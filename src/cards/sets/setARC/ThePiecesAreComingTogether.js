"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThePiecesAreComingTogether extends UnimplementedCard {
  constructor (game) {
    super(game, "The Pieces Are Coming Together", "Archenemy", "ARC");
  }
}

module.exports = ThePiecesAreComingTogether;
