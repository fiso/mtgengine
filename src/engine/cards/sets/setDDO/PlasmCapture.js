"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlasmCapture extends UnimplementedCard {
  constructor (game) {
    super(game, "Plasm Capture", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PlasmCapture;
