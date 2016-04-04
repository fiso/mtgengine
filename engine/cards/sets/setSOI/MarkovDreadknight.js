"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkovDreadknight extends Card {
  constructor(game) {
    super(game, "Markov Dreadknight", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MarkovDreadknight;
