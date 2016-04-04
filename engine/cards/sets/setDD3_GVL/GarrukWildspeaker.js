"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GarrukWildspeaker extends Card {
  constructor(game) {
    super(game, "Garruk Wildspeaker", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = GarrukWildspeaker;
