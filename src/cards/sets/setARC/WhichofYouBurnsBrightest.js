"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhichofYouBurnsBrightest extends UnimplementedCard {
  constructor (game) {
    super(game, "Which of You Burns Brightest?", "Archenemy", "ARC");
  }
}

module.exports = WhichofYouBurnsBrightest;
