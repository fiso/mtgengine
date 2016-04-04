"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhichofYouBurnsBrightest extends Card {
  constructor(game) {
    super(game, "Which of You Burns Brightest?", "Archenemy", "ARC");
  }
}

module.exports = WhichofYouBurnsBrightest;
