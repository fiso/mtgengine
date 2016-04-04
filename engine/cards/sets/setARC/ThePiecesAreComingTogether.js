"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThePiecesAreComingTogether extends Card {
  constructor(game) {
    super(game, "The Pieces Are Coming Together", "Archenemy", "ARC");
  }
}

module.exports = ThePiecesAreComingTogether;
